"use client";

import { motion } from "framer-motion";

// All skills use your PNGs from public/skills/
const skills = [
  { name: "JavaScript", img: "/skills/js.png" },
  { name: "Java", img: "/skills/java.png" },
  { name: "Python", img: "/skills/python.png" },
  { name: "Node.js", img: "/skills/nodejs.png" },
  { name: "CSS", img: "/skills/css-3.png" },
  { name: "Sass", img: "/skills/sass.png" },
  { name: "Docker", img: "/skills/icons8-docker-48.png" },
  { name: "Git", img: "/skills/icons8-git-48.png" },
  { name: "Figma", img: "/skills/icons8-figma-48.png" },
  { name: "Firebase", img: "/skills/icons8-firebase-48.png" },
  { name: "SQL", img: "/skills/sql-server.png" },
  { name: "ChatGPT / AI", img: "/skills/chat-gpt.png" },
  { name: "Google", img: "/skills/icons8-google-48.png" },
];

const deployTools = [
  { name: "Vercel", label: "Ship & deploy" },
  { name: "Netlify", label: "Ship & deploy" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 border-t border-slate-800/50 bg-surfaceLight/30"
    >
      <div className="max-w-4xl mx-auto">
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
            Skills
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl text-white mb-6"
          >
            What I work with
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-accent rounded-full mb-12"
          />

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                className="group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-accent/40 hover:bg-slate-800/70 transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-2">
                  <img
                    src={skill.img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-sans text-slate-300 text-xs sm:text-sm text-center group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p variants={item} className="font-display font-semibold text-accent text-sm uppercase tracking-wider mt-12 mb-4">
            Shipping & deployment
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3">
            {deployTools.map((tool) => (
              <motion.span
                key={tool.name}
                className="px-4 py-2 rounded-xl bg-slate-800/60 border border-slate-600 text-slate-300 font-sans text-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(14, 165, 233, 0.5)" }}
                transition={{ duration: 0.2 }}
              >
                {tool.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
