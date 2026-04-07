"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* TEXT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            About <span className="text-purple-400">Me</span>
          </motion.h2>

          {personalInfo.aboutParagraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-4 leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-6">
          {personalInfo.highlightStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-purple-500 transition"
            >
              <h3 className="text-3xl font-bold text-purple-400">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}