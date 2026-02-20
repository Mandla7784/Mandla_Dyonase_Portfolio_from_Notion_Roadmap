"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-slate-800/50 py-8 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm font-sans">
        <p>© {year} Mandla Dyonase. All rights reserved.</p>
        <motion.a
          href="#"
          className="hover:text-accent transition-colors"
          whileHover={{ y: -2 }}
        >
          Back to top
        </motion.a>
      </div>
    </motion.footer>
  );
}
