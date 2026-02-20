"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  }),
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
  },
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px] animate-gradient-shift" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Profile photo - impressive focal point */}
        <motion.div
          variants={item}
          className="relative order-first md:order-last shrink-0"
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-2 ring-accent/50 ring-offset-4 ring-offset-white dark:ring-offset-surface shadow-2xl shadow-accent/20 bg-slate-200 dark:bg-surfaceLight">
            {!imgError ? (
              <img
                src="/heroImage.png"
                alt="Mandla Dyonase"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-4xl text-accent/80">MD</span>
            )}
          </div>
          <div className="absolute -inset-2 rounded-2xl bg-accent/20 blur-2xl -z-10" aria-hidden />
        </motion.div>

        <div className="text-center md:text-left">
        <motion.p
          variants={item}
          className="font-sans text-accent text-sm uppercase tracking-[0.3em] mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 dark:text-white tracking-tight"
        >
          Mandla Dyonase
        </motion.h1>

        <motion.div
          variants={lineReveal}
          className="h-1 w-24 sm:w-32 bg-accent rounded-full mx-auto md:mx-0 my-6 origin-left"
        />

        <motion.p
          variants={item}
          className="font-sans text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto"
        >
          Web Developer — building fast, accessible, and beautiful experiences.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View my work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
