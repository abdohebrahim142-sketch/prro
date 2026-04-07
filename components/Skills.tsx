"use client";

import { motion } from 'framer-motion';
import { skills } from '@/lib/content';

export default function Skills() {
  return (
    <section id="skills">
  <h2 className="text-4xl font-bold text-center mb-12">
    My <span className="text-[#C8A84C]">Skills</span>
  </h2>

  <div className="flex flex-wrap justify-center gap-4">
    {["Next.js", "React", "Tailwind", "Framer Motion"].map((s, i) => (
      <span
        key={i}
        className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-[#C8A84C] hover:text-[#C8A84C] transition"
      >
        {s}
      </span>
    ))}
  </div>
</section>
  );
}