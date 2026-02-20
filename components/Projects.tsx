"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const projects = [
  {
    title: "Quick Ticket",
    description:
      "Support ticket system with full backend and frontend. Guided project using Neon + PostgreSQL, Next.js and TypeScript.",
    stack: ["Next.js", "TypeScript", "Neon", "PostgreSQL"],
    liveUrl: "https://quick-ticket-lake.vercel.app/login",
    repoUrl: "#",
    image: "/quickticket.png",
  },
  {
    title: "Online Learning Platform",
    description:
      "AI-powered online learning. Structured courses, coding lessons, and learning paths. Same stack: Next.js, TypeScript.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    liveUrl: "https://online-learning-platform-ten-gray.vercel.app/",
    repoUrl: "#",
    image: "/onlinelearning.png",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Vanilla JS game with CSS. Player vs player with score tracking and PayFast donation integration.",
    stack: ["JavaScript", "CSS", "HTML"],
    liveUrl: "https://project-tic-tac-toe-odin.vercel.app/",
    repoUrl: "#",
    image: "/icons/tci tac toe.jpg",
  },
  {
    title: "Library",
    description:
      "Book library app. Vanilla JS with localStorage as database. Add books, track read status.",
    stack: ["JavaScript", "localStorage", "HTML/CSS"],
    liveUrl: "https://project-library-three.vercel.app/",
    repoUrl: "#",
    image: "/projects/library.png",
  },
  {
    title: "Botion To-Do",
    description:
      "To-do app with projects, priorities, and settings. Built with JavaScript and SASS.",
    stack: ["JavaScript", "SASS", "HTML"],
    liveUrl: "https://project-todo-list-1a5i.vercel.app/",
    repoUrl: "#",
    image: "/todolist.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 border-t border-slate-800/50 bg-surfaceLight/30 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={card}
            className="font-sans text-accent text-sm uppercase tracking-[0.3em] mb-4"
          >
            Projects
          </motion.p>
          <motion.h2
            variants={card}
            className="font-display font-bold text-3xl sm:text-4xl text-white mb-6"
          >
            Shipped on Vercel
          </motion.h2>
          <motion.div
            variants={card}
            className="h-1 w-20 bg-accent rounded-full mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <motion.article
                key={proj.title}
                variants={card}
                className="group rounded-2xl border border-slate-700/60 bg-slate-900/50 overflow-hidden backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                    <img
                      src={proj.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 z-[1]"
                      onError={(e) => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-sans text-sm">
                      <span className="text-4xl mb-2">🖼</span>
                      Add screenshot
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                      {proj.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 text-xs font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
                <div className="p-4">
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-accent transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-slate-400 text-sm mt-1 line-clamp-2">
                    {proj.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-xs font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    <motion.a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-accent hover:underline text-sm font-medium"
                      whileHover={{ x: 2 }}
                    >
                      Live →
                    </motion.a>
                    {proj.repoUrl !== "#" && (
                      <motion.a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-slate-400 hover:text-accent text-sm"
                        whileHover={{ x: 2 }}
                      >
                        Repo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
