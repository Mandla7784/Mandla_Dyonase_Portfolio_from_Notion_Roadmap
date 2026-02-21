"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const BOT_NAME = "Mandla";
const HERO_IMAGE = "/heroImage.png";

function Avatar({ className = "w-12 h-12" }: { className?: string }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className={`rounded-full overflow-hidden ring-2 ring-accent/50 shrink-0 ${className}`}
    >
      {!imgError ? (
        <img
          src={HERO_IMAGE}
          alt={BOT_NAME}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="flex w-full h-full items-center justify-center bg-accent/20 font-display font-bold text-accent">
          MD
        </span>
      )}
    </div>
  );
}

// Robot icon - robot head with antenna and eyes
function RobotIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v2m0 0v2m0-2h2m-2 0H10m6 4v4m-2-2h4M8 16v4m-2-2h4M6 8H4a2 2 0 01-2-2V6a2 2 0 012-2h2m12 0h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M6 20h12a2 2 0 002-2v-2"
      />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

type Message = { id: string; role: "user" | "bot"; text: string };

function getBotReply(userText: string): string {
  const t = userText.toLowerCase().trim();
  if (!t) return "Type something and I'll try to help!";
  if (/\b(hi|hello|hey|howdy)\b/.test(t))
    return "Hi! I'm Mandla's assistant. Ask me about his projects, skills, or how to get in touch.";
  if (/\b(project|work|portfolio|vercel)\b/.test(t))
    return "Mandla has several projects on Vercel — support tickets, learning platform, games, and more. Scroll to the Projects section or click 'View projects' below!";
  if (/\b(skills?|skils|tech|stack|technology|experience)\b/.test(t) || /skil/.test(t))
    return "He works with JavaScript, Next.js, TypeScript, and more. Check the Skills and Experience sections for the full picture.";
  if (/\b(contact|email|hire|message|reach)\b/.test(t))
    return "You can reach him via the Contact section — use the form or the email/LinkedIn/GitHub links. He's open to opportunities!";
  if (/\b(who|about|mandla)\b/.test(t))
    return "Mandla is a web developer. He's done a Cloud Engineer internship at BCX and builds full-stack and front-end projects. Have a look around the site!";
  return "I'm Mandla's assistant. You can ask about his projects, skills, or how to contact him. Or use the quick links below!";
}

const quickReplies = [
  { label: "View projects", href: "#projects" },
  { label: "Contact me", href: "#contact" },
  { label: "My skills", href: "#skills" },
];

const WELCOME_ID = "welcome";
const initialMessages: Message[] = [
  {
    id: WELCOME_ID,
    role: "bot",
    text: "Hi! I'm Mandla. Ask me about my projects, skills, or how to get in touch — or type a message below.",
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  function handleSend() {
    const text = input.trim();
    if (!text || sending) return;
    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);
    const replyText = getBotReply(text);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: `b-${Date.now()}`, role: "bot", text: replyText },
      ]);
      setSending(false);
    }, 600);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
            className="fixed bottom-24 right-6 z-[100] w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl border border-accent/30 bg-white dark:bg-slate-900 shadow-xl shadow-black/20 dark:shadow-accent/10 overflow-hidden flex flex-col"
          >
            {/* Header with profile pic (only inside chat) */}
            <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 shrink-0">
              <Avatar className="w-12 h-12" />
              <div>
                <p className="font-display font-semibold text-slate-900 dark:text-white">
                  {BOT_NAME}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Typically replies quickly
                </p>
              </div>
            </div>

            {/* Messages - scrollable */}
            <div
              ref={scrollRef}
              className="p-4 space-y-4 overflow-y-auto flex-1 min-h-0 max-h-[260px]"
            >
              {messages.map((msg) =>
                msg.role === "bot" ? (
                  <div key={msg.id} className="flex gap-3">
                    <Avatar className="w-8 h-8 shrink-0" />
                    <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-sans">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex justify-end">
                    <div className="rounded-2xl rounded-tr-sm px-4 py-3 bg-accent/20 dark:bg-accent/30 text-slate-800 dark:text-slate-100 text-sm font-sans max-w-[85%]">
                      {msg.text}
                    </div>
                  </div>
                ),
              )}
              {sending && (
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8 shrink-0" />
                  <div className="rounded-2xl rounded-tl-sm px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm">
                    ...
                  </div>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
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

            {/* Chat input */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 shrink-0 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                disabled={sending}
              />
              <motion.button
                type="button"
                onClick={handleSend}
                disabled={sending || !input.trim()}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.97 }}
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button - robot icon when closed */}
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
