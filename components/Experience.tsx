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

const experiences = [
  {
    role: "Cloud Engineer Intern",
    company: "BCX",
    period: "Mar 2025 – May 2025 (3 months)",
    description:
      "Cloud engineering internship. Hands-on experience with cloud platforms and infrastructure.",
  },
  {
    role: "Web Developer",
    company: "Self Employed",
    period: "2023 – 2026",
    description:
      "Building and maintaining web applications. Collaborating with design and product to ship features that improve user experience.",
  },
  {
    role: "IT Intern",
    company: "NetCampus Cape Town",
    period: "2026",
    description: "Technical Support",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl text-white mb-6"
          >
            Where I&apos;ve worked
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-accent rounded-full mb-12"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.article
                key={`${exp.company}-${i}`}
                variants={item}
                className="relative pl-6 border-l-2 border-slate-700 hover:border-accent/60 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-accent" />
                <p className="font-display font-semibold text-white text-lg">
                  {exp.role}
                </p>
                <p className="font-sans text-accent text-sm mt-1">
                  {exp.company}
                </p>
                <p className="font-sans text-slate-500 text-sm mt-0.5">
                  {exp.period}
                </p>
                <p className="font-sans text-slate-400 mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
