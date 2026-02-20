"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Add your video URLs or embed IDs here when ready
const videos: { title: string; embedUrl?: string; placeholder?: boolean }[] = [
  { title: "My journey", placeholder: true },
  { title: "Project walkthrough", placeholder: true },
];

export default function VideoJourney() {
  return (
    <section
      id="journey"
      className="relative py-24 px-6 border-t border-slate-200 dark:border-slate-800/50 bg-slate-50 dark:bg-surfaceLight/30 overflow-hidden"
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
            Journey
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6"
          >
            My journey in videos
          </motion.h2>
          <motion.div
            variants={item}
            className="h-1 w-20 bg-accent rounded-full mb-10"
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {videos.map((v, i) => (
              <motion.div
                key={v.title + i}
                variants={item}
                className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900/40 overflow-hidden shadow-sm dark:shadow-none"
              >
                {v.embedUrl ? (
                  <div className="aspect-video">
                    <iframe
                      src={v.embedUrl}
                      title={v.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center text-slate-500 font-sans">
                    <span className="text-5xl mb-3">🎬</span>
                    <span className="text-sm">Add your video</span>
                    <span className="text-xs mt-1 opacity-80">{v.title}</span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                    {v.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={item}
            className="mt-6 font-sans text-slate-600 dark:text-slate-500 text-sm"
          >
            Add your YouTube/Vimeo embed URLs in{" "}
            <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-400">
              components/VideoJourney.tsx
            </code>{" "}
            to show your journey videos here.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
