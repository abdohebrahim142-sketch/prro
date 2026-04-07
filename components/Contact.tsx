"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="text-center">
  <h2 className="text-4xl font-bold mb-6">
    Let’s Work <span className="text-[#C8A84C]">Together</span>
  </h2>

  <p className="text-gray-400 mb-8">
    Ready to build your personal brand and stand out?
  </p>

  <button className="px-8 py-3 bg-[#C8A84C] text-black font-semibold rounded-lg hover:scale-105 transition">
    Get In Touch
  </button>
</section>
  );
}