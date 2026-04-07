"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-black">
      
      <div className="text-center max-w-3xl">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-purple-400 uppercase tracking-widest text-sm mb-4"
        >
          {personalInfo.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 text-lg"
        >
          {personalInfo.heroSummary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 hover:scale-105 transition rounded-xl"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 hover:border-white transition rounded-xl"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}