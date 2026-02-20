"use client";

import { motion } from "framer-motion";

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

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-6 border-t border-slate-800/50 bg-surfaceLight/30"
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
            Education
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl text-white mb-6"
          >
            Where I learned
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-accent rounded-full mb-12"
          />

          <motion.article
            variants={item}
            className="relative pl-6 border-l-2 border-slate-700 hover:border-accent/60 transition-colors"
            whileHover={{ x: 4 }}
          >
            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-accent" />
            <p className="font-display font-semibold text-white text-lg">
              Certificate in Software Development
            </p>
            <p className="font-sans text-accent text-sm mt-1">
              CodeSpace Academy
            </p>
            <p className="font-sans text-slate-400 mt-2">
              Software Development Fundamentals
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
