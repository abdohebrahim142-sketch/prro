"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Personal Website",
    desc: "Premium personal websites that position you as a top-tier talent.",
  },
  {
    title: "ATS CV Optimization",
    desc: "CVs built to pass ATS systems and get interviews faster.",
  },
  {
    title: "LinkedIn Optimization",
    desc: "Turn your LinkedIn into a client & recruiter magnet.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Services I <span className="text-[#C8A84C]">Provide</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 bg-[#0f172a] border border-white/10 rounded-2xl hover:border-[#C8A84C] transition"
          >
            <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}