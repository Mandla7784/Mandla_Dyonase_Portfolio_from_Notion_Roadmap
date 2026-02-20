"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm font-sans">
        <p>© {year} Mandla Dyonase. All rights reserved.</p>
        <a
          href="#"
          className="hover:text-accent transition-colors"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
