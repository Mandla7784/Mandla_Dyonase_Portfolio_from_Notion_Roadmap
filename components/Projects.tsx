"use client";

import { motion } from "framer-motion";

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

const projects = [
  {
    title: "Project One",
    description:
      "A short description of what this project does and the tech you used. Add a live link and repo link below.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Another project that shows your range—APIs, UI, or something you&apos;re proud of. Replace with your real project.",
    stack: ["React", "Node", "REST"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Optional third project or side project. Quality over quantity for job applications.",
    stack: ["Your stack"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 border-t border-slate-800/50 bg-surfaceLight/30"
    >
      <div className="max-w-4xl mx-auto">
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
            Projects
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl text-white mb-6"
          >
            Selected work
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-accent rounded-full mb-12"
          />

          <div className="grid gap-8 sm:gap-10">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                variants={item}
                className="group rounded-xl border border-slate-700/60 bg-slate-900/40 p-6 sm:p-8 hover:border-accent/40 transition-colors backdrop-blur-sm"
              >
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-slate-400 mt-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-sm font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-accent hover:underline text-sm font-medium"
                    whileHover={{ x: 2 }}
                  >
                    Live site →
                  </motion.a>
                  <motion.a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-slate-400 hover:text-accent hover:underline text-sm font-medium"
                    whileHover={{ x: 2 }}
                  >
                    Source code
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
