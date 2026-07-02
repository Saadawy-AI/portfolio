import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";
import ChatWindow from "./ChatWindow";
import { trackEvent } from "../../utils/analytics";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating AI Button */}

      <motion.button
        animate={{
          boxShadow: [
            "0 0 10px #06b6d4",
            "0 0 25px #06b6d4",
            "0 0 10px #06b6d4",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          trackEvent(open ? "chatbot_close_button" : "chatbot_open");
          setOpen(!open);
        }}
        className="fixed bottom-5 right-5 z-[9999] inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-3 text-sm font-bold text-black shadow-2xl sm:bottom-8 sm:right-8 sm:px-5 sm:py-4"
        aria-label="Open AI portfolio assistant"
      >
        <Bot size={20} />
        <span className="hidden sm:inline">AI Assistant</span>
      </motion.button>

      {/* Chat Window */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChatWindow close={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
