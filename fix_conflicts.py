from pathlib import Path

# Fix chatData.js by keeping content from export declaration onward and removing conflict markers.
chat_path = Path('src/components/chatbot/chatData.js')
text = chat_path.read_text(encoding='utf-8')
export_decl = 'export const portfolioContext = `'
idx = text.find(export_decl)
if idx != -1:
    text = text[idx:]
text = text.replace('<<<<<<< HEAD\n', '')
text = text.replace('=======\n', '')
text = text.replace('>>>>>>> ff56da9f57bad88b9528b0a56c92eb9ae6e350f0\n', '')
chat_path.write_text(text, encoding='utf-8')
print('Fixed chatData.js')

# Fix SectionWrapper.jsx with a clean component definition.
section_wrapper_path = Path('src/components/common/SectionWrapper.jsx')
section_wrapper_path.write_text(
"""import { motion } from \"framer-motion\";

export default function SectionWrapper({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: \"easeOut\",
      }}
    >
      {children}
    </motion.div>
  );
}
""",
    encoding='utf-8',
)
print('Fixed SectionWrapper.jsx')

# Fix Certifications.jsx by truncating any duplicate import block after the first import.
cert_path = Path('src/components/sections/Certifications.jsx')
text = cert_path.read_text(encoding='utf-8')
first_import = text.find('import { motion } from "framer-motion";')
second_import = text.find('import { motion } from "framer-motion";', first_import + 1)
if second_import != -1:
    text = text[:second_import]
cert_path.write_text(text, encoding='utf-8')
print('Fixed Certifications.jsx')
