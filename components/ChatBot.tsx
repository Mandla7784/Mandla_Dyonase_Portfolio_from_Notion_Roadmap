"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const welcomeMessage = {
  text: "Hi! I'm Mandla. Want to see my projects or get in touch? Use the links below or drop a message.",
};

const quickReplies = [
  { label: "View projects", href: "#projects" },
  { label: "Contact me", href: "#contact" },
  { label: "My skills", href: "#skills" },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-[100] w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl border border-accent/30 bg-white dark:bg-slate-900 shadow-xl shadow-black/20 dark:shadow-accent/10 overflow-hidden"
          >
            {/* Header with hero image */}
            <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              <Avatar className="w-12 h-12" />
              <div>
                <p className="font-display font-semibold text-slate-900 dark:text-white">{BOT_NAME}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Typically replies quickly</p>
              </div>
            </div>

            {/* Message area */}
            <div className="p-4 space-y-4 max-h-[280px] overflow-y-auto">
              <div className="flex gap-3">
                <Avatar className="w-8 h-8" />
                <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-sans">
                  {welcomeMessage.text}
                </div>
              </div>
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

            {/* Footer CTA */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-2.5 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Send a message
              </a>
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
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </motion.button>
    </>
  );
}
