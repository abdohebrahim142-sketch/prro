"use client";
import Hero from "../components/Hero";
// تغيير المكونات التالية إلى Named Imports (بين أقواس)
import  About  from "@/components/About";
import  Experience  from "@/components/Experience";
import  Skills  from "@/components/Skills";
import  Projects  from "@/components/Projects";
import  Education  from "@/components/Education";
import  Contact  from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </motion.div>
  );
}