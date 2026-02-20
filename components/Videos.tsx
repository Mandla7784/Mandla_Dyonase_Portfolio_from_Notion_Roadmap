"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const videos = [
  { id: "", title: "My journey — video 1", description: "Add your first video. Paste YouTube video ID in components/Videos.tsx." },
  { id: "", title: "My journey — video 2", description: "Get the ID from the YouTube URL (e.g. dQw4w9WgXcQ from watch?v=dQw4w9WgXcQ)." },
  { id: "", title: "My journey — video 3", description: "Leave id empty to show a placeholder card until you add a video." },
];

export default function Videos() {
  return (
    <section id="videos" className="relative py-24 px-6 border-t border-slate-800/50 bg-surfaceLight/30">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.p variants={item} className="font-sans text-accent text-sm uppercase tracking-[0.3em] mb-4">Journey</motion.p>
          <motion.h2 variants={item} className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">In motion</motion.h2>
          <motion.div variants={item} className="h-1 w-20 bg-accent rounded-full mb-4" />
          <motion.p variants={item} className="font-sans text-slate-400 text-lg mb-12 max-w-xl">Videos from my journey — projects, learnings, and more.</motion.p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
              <motion.article
                key={String(i)}
                variants={item}
                className="group rounded-xl border border-slate-700/60 bg-slate-900/40 overflow-hidden backdrop-blur-sm hover:border-accent/40 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="aspect-video bg-slate-800 flex items-center justify-center">
                  {video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <span className="text-slate-500 font-sans text-sm text-center px-2">Add video ID in components/Videos.tsx</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-white group-hover:text-accent transition-colors">{video.title}</h3>
                  <p className="font-sans text-slate-400 text-sm mt-1">{video.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
