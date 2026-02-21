"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const BOT_NAME = "Mandla";
const HERO_IMAGE = "/heroImage.png";

function Avatar({ className = "w-12 h-12" }: { className?: string }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={`rounded-full overflow-hidden ring-2 ring-accent/50 shrink-0 ${className}`}>
      {!imgError ? (
        <img src={HERO_IMAGE} alt={BOT_NAME} className="w-full h-full object-cover" onError={() => setImgError(true)} />
      ) : (
        <span className="flex w-full h-full items-center justify-center bg-accent/20 font-display font-bold text-accent">MD</span>
      )}
    </div>
  );
}

function RobotIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v2m0 0v2m0-2h2m-2 0H10m6 4v4m-2-2h4M8 16v4m-2-2h4M6 8H4a2 2 0 01-2-2V6a2 2 0 012-2h2m12 0h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M6 20h12a2 2 0 002-2v-2" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

type Message = { id: string; role: "user" | "bot"; text: string };

function getBotReply(userText: string): string {
  const t = userText.toLowerCase().trim();
  if (!t) return "Type something and I'll try to help!";

  // Greetings
  if (/\b(hi|hello|hey|howdy|good morning|good afternoon|good evening)\b/.test(t))
    return "Hi! I'm Mandla's assistant. Ask me about his projects, skills, experience, or how to get in touch.";

  // Projects
  if (/\b(project|work|portfolio|vercel|built|build|app|website)\b/.test(t))
    return "Mandla has several projects on Vercel: Quick Ticket (support system), Online Learning Platform, Tic-Tac-Toe, Library app, and Botion To-Do. Scroll to the Projects section or click 'View projects' below!";

  // Skills & tech
  if (/\b(skill|tech|stack|technology|tools|javascript|typescript|next|react)\b/.test(t))
    return "He works with JavaScript, TypeScript, Next.js, Node.js, Python, Java, CSS, SASS, Docker, Git, and more. He deploys with Vercel and Netlify. Check the Skills section for the full list!";

  // Experience & job
  if (/\b(experience|job|work|intern|internship|bcx|employer)\b/.test(t))
    return "Mandla did a Cloud Engineer internship at BCX (3 months, 2025), and has been building web apps as a developer. He's open to full-time roles and collaborations. See the Experience section for details.";

  // Education
  if (/\b(education|learn|study|degree|certificate|codespace|school)\b/.test(t))
    return "He has a Certificate in Software Development from CodeSpace Academy, focusing on software development fundamentals. Check the Education section for more.";

  // Contact & hire
  if (/\b(contact|email|hire|message|reach|linkedin|github|get in touch)\b/.test(t))
    return "You can reach him via the Contact section — use the form or the email, LinkedIn, and GitHub links. He's open to new opportunities!";

  // About / who
  if (/\b(who|about|mandla|you|yourself)\b/.test(t))
    return "Mandla is a web developer focused on fast, accessible apps. He's done a Cloud Engineer internship at BCX and builds full-stack and front-end projects. Have a look around the site!";

  // Thanks / bye
  if (/\b(thanks|thank you|bye|goodbye|cheers)\b/.test(t))
    return "You're welcome! Feel free to ask more or use the links to explore his work. Good luck!";

  // Help
  if (/\b(help|what can you do|options)\b/.test(t))
    return "I can tell you about Mandla's projects, skills, experience, education, and how to contact him. Just ask in your own words, or use the quick links below!";

  return "I'm Mandla's assistant. Try asking about his projects, skills, experience, or how to contact him. Or use the quick links below!";
}

const quickReplies = [
  { label: "View projects", href: "#projects" },
  { label: "Contact me", href: "#contact" },
  { label: "My skills", href: "#skills" },
];

const WELCOME_ID = "welcome";
const initialMessages: Message[] = [
  { id: WELCOME_ID, role: "bot", text: "Hi! I'm Mandla. Ask me about my projects, skills, experience, or how to get in touch — or type a message below." },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleSend() {
    const text = input.trim();
    if (!text || sending) return;
    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);
    const replyText = getBotReply(text);
    setTimeout(() => {
      setMessages((m) => [...m, { id: `b-${Date.now()}`, role: "bot", text: replyText }]);
      setSending(false);
    }, 500 + Math.min(replyText.length * 15, 400));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function clearChat() {
    setMessages(initialMessages);
    setInput("");
    setSending(false);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-[100] w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl border border-accent/30 bg-white dark:bg-slate-900 shadow-xl shadow-black/20 dark:shadow-accent/10 overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar className="w-12 h-12 shrink-0" />
                <div className="min-w-0">
                  <p className="font-display font-semibold text-slate-900 dark:text-white truncate">{BOT_NAME}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Typically replies quickly</p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearChat}
                className="shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Clear chat"
              >
                New chat
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="p-4 space-y-4 overflow-y-auto flex-1 min-h-0 max-h-[280px]">
              {messages.map((msg) =>
                msg.role === "bot" ? (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-3"
                  >
                    <Avatar className="w-8 h-8 shrink-0" />
                    <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-sans">
                      {msg.text}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-end"
                  >
                    <div className="rounded-2xl rounded-tr-sm px-4 py-3 bg-accent/20 dark:bg-accent/30 text-slate-800 dark:text-slate-100 text-sm font-sans max-w-[85%]">
                      {msg.text}
                    </div>
                  </motion.div>
                )
              )}
              {sending && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <Avatar className="w-8 h-8 shrink-0" />
                  <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    <TypingDots />
                  </div>
                </motion.div>
              )}
              <div className="flex flex-wrap gap-2 pt-1">
                {quickReplies.map((q) => (
                  <a
                    key={q.label}
                    href={q.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-accent/15 dark:bg-accent/20 text-accent hover:bg-accent/25 dark:hover:bg-accent/30 transition-colors"
                  >
                    {q.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 shrink-0 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                disabled={sending}
                aria-label="Chat message"
              />
              <motion.button
                type="button"
                onClick={handleSend}
                disabled={sending || !input.trim()}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.97 }}
                aria-label="Send message"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[99] w-14 h-14 rounded-full flex items-center justify-center bg-slate-800 dark:bg-slate-700 text-accent shadow-lg ring-2 ring-accent/50 hover:ring-accent focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={open ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <RobotIcon className="w-8 h-8" />
      </motion.button>
    </>
  );
}
