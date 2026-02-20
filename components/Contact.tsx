"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const links = [
  { label: "Email", href: "mailto:marsatti7784@gmail.com", icon: "✉" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mandla-dyonase-83b008260/",
    icon: "in",
  },
  { label: "GitHub", href: "https://github.com/Mandla7784", icon: "⌘" },
];

// Set this in .env.local as NEXT_PUBLIC_FORMSPREE_ID (get it from formspree.io)
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 border-t border-slate-800/50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={item}
            className="font-sans text-accent text-sm uppercase tracking-[0.3em] mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl text-white mb-6"
          >
            Get in touch
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-accent rounded-full mb-8"
          />
          <motion.p
            variants={item}
            className="font-sans text-slate-400 text-lg mb-10"
          >
            I&apos;m open to new opportunities. Send a message or reach out
            directly.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-6 mb-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-accent hover:text-accent transition-colors font-sans"
              >
                <span className="text-accent font-semibold">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
              <div>
                <label htmlFor="name" className="block font-sans text-sm text-slate-400 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-slate-600 text-white placeholder-slate-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-sans"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-sans text-sm text-slate-400 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-slate-600 text-white placeholder-slate-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-sans"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-sans text-sm text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-slate-600 text-white placeholder-slate-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent font-sans resize-y min-h-[120px]"
                  placeholder="Your message..."
                />
              </div>
              {status === "success" && (
                <p className="font-sans text-accent">Thanks! I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="font-sans text-red-400">Something went wrong. Please try emailing directly.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed font-sans"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
