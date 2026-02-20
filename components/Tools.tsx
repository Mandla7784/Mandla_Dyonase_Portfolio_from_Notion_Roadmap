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
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const tools = [
  {
    name: "Vercel",
    description: "Ship and deploy frontends and full-stack apps.",
    url: "https://vercel.com",
  },
  {
    name: "Netlify",
    description: "Deploy static sites and serverless functions.",
    url: "https://netlify.com",
  },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="relative py-24 px-6 border-t border-slate-800/50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={item}
            className="font-sans text-accent text-sm uppercase tracking-[0.3em] mb-4"
          >
            Deploy & ship
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl text-white mb-6"
          >
            Tools I use for shipping
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-accent rounded-full mb-10"
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <motion.a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                className="block p-6 rounded-2xl border border-slate-700/60 bg-slate-900/40 hover:border-accent/50 transition-all duration-300 group"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="font-display font-bold text-xl text-white group-hover:text-accent transition-colors">
                  {tool.name}
                </span>
                <p className="font-sans text-slate-400 text-sm mt-2">
                  {tool.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
