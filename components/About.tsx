"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  }),
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 border-t border-slate-200 dark:border-slate-800/50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <motion.p
            variants={item}
            className="font-sans text-accent text-sm uppercase tracking-[0.3em] mb-4"
          >
            About
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl text-white mb-6"
          >
            A bit about me
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-accent rounded-full mb-8"
          />
          <div className="space-y-4 text-slate-400 font-sans text-lg leading-relaxed">
            <motion.p variants={item}>
              I&apos;m a web developer focused on building fast, accessible
              applications that users enjoy. I care about clean code, clear
              design, and shipping things that work.
            </motion.p>
            <motion.p variants={item}>
              When I&apos;m not coding, I like to stay curious—exploring new
              tools and approaches so I can bring fresh ideas to the next
              project. I&apos;m open to full-time roles and collaborations where
              I can contribute from day one.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
