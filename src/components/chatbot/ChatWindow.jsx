import { useState, useRef, useEffect } from "react";
import { Mic, Send, Trash2, X } from "lucide-react";
import { portfolioContext } from "./chatData";
import { trackEvent } from "../../utils/analytics";
const suggestions = [
  "Tell me about yourself",
  "Explain IKEA project",
  "Explain Smart City project",
  "What are your skills?",
];

export default function ChatWindow({ close }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello. I am Mohamed's portfolio assistant. Ask me about his projects, skills, experience, or availability.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const chatRef = useRef(null);
  const recognitionRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop =
        chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Typing effect
  const typeResponse = (fullText) => {
    let index = 0;
    let current = "";

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "" },
    ]);

    const interval = setInterval(() => {
      current += fullText[index];

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].text = current;
        return updated;
      });

      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 10);
  };

  // Voice Recognition
  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript;

      setInput(transcript);
    };

    recognition.start();

    recognitionRef.current = recognition;
  };

  // Gemini API
  const askGemini = async (question) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return "API Error: Gemini API key is not configured. Add VITE_GEMINI_API_KEY to .env and restart the dev server.";
    }

    const conversationHistory = history
      .map((msg) => `${msg.role}: ${msg.text}`)
      .join("\n");

    const prompt = `
${portfolioContext}

Previous Conversation:
${conversationHistory}

User Question:
${question}
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        return "API Error: Invalid or unauthorized Gemini API credentials. Check your key and Google Cloud project settings.";
      }
      return `API Error: ${data.error?.message || "Unknown error"}`;
    }

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini."
    );
  };

  // Send Message
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
    ]);

    setInput("");
    setLoading(true);

    try {
      const aiResponse = await askGemini(text);

      setHistory((prev) => [
        ...prev,
        { role: "user", text },
        { role: "assistant", text: aiResponse },
      ]);

      setLoading(false);

      typeResponse(aiResponse);
    } catch {
      setLoading(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Error connecting to Gemini API.",
        },
      ]);
    }
  };

  // Clear Chat
  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Chat cleared. Ask me again.",
      },
    ]);

    setHistory([]);
  };

  return (
    <div className="fixed inset-x-3 bottom-20 z-[9999] h-[min(680px,calc(100vh-6rem))] rounded-2xl border border-cyan-400/20 bg-[#08111f]/95 p-4 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:bottom-28 sm:right-8 sm:w-[400px] sm:p-5">

      {/* HEADER */}

      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-cyan-400">
          AI Portfolio Assistant
        </h3>
 
        <div className="flex gap-2">
          <button
            onClick={clearChat}
            className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-300"
            aria-label="Clear chat"
          >
            <Trash2 size={16} />
          </button>
          <button
            onClick={close}
            className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-300"
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* CHAT */}

      <div
        ref={chatRef}
        className="h-[42vh] min-h-[230px] overflow-y-auto rounded-xl bg-black/20 p-3 sm:h-[330px]"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 rounded-xl p-3 text-sm ${
              msg.sender === "bot"
                ? "bg-cyan-500/10 text-cyan-300"
                : "bg-gray-800 text-right"
            }`}
          >
            <pre className="whitespace-pre-wrap font-sans">
              {msg.text}
            </pre>
          </div>
        ))}

        {loading && (
          <div className="text-sm text-cyan-400">
            Thinking...
          </div>
        )}
      </div>

      {/* SUGGESTIONS */}

      <div className="mt-4 flex flex-wrap gap-2">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => sendMessage(item)}
            className="rounded-lg bg-black/30 px-3 py-1 text-xs transition hover:bg-cyan-500 hover:text-black"
          >
            {item}
          </button>
        ))}
      </div>

      {/* QUICK ACTIONS */}

      <div className="mt-4 grid grid-cols-2 gap-2">

        <a
 
          href="https://github.com/Saadawy-AI"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("chatbot_quick_link", { target: "github" })}
          className="rounded-xl bg-black/30 p-2 text-center text-sm hover:bg-cyan-500 hover:text-black"
        >
          GitHub
        </a>

        <a
 
          href="https://linkedin.com/in/muhammad-saadawy"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("chatbot_quick_link", { target: "linkedin" })}
          className="rounded-xl bg-black/30 p-2 text-center text-sm hover:bg-cyan-500 hover:text-black"
        >
          LinkedIn
        </a>

      </div>

      {/* INPUT */}

      <div className="mt-5 flex items-center gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 rounded-xl bg-black/30 px-4 py-3 outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(input);
            }
          }}
        />

        {/* Voice */}

        <button
          onClick={startVoice}
 
          className="rounded-xl bg-black/40 px-3 py-3 transition hover:bg-cyan-500 hover:text-black"
          aria-label="Start voice input"
        >
          <Mic size={18} />
        </button>
        {/* Send */}

        <button
          onClick={() => sendMessage(input)}
 
          className="rounded-xl bg-cyan-500 px-3 py-3 font-bold text-black transition hover:bg-cyan-300"
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
 
}
