"use client";

import { motion } from 'framer-motion';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <section id="projects">
  <h2 className="text-4xl font-bold mb-12 text-center">
    Featured <span className="text-[#C8A84C]">Projects</span>
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {[1, 2].map((p) => (
      <div
        key={p}
        className="p-6 bg-[#0f172a] border border-white/10 rounded-2xl hover:border-[#C8A84C] transition"
      >
        <h3 className="text-xl font-semibold mb-2">Project {p}</h3>
        <p className="text-gray-400 mb-3">
          High-converting website built for personal branding.
        </p>
        <p className="text-[#C8A84C] text-sm font-semibold">
          +300% engagement
        </p>
      </div>
    ))}
  </div>
</section>
  );
}