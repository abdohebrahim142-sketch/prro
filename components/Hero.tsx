"use client";

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalInfo } from '@/lib/content';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '4rem',
      paddingTop: 'var(--nav-height)',
      flexWrap: 'wrap'
    }}>
      <div style={{ flex: 1, minWidth: '300px' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.2em', marginBottom: '1rem' }}
        >
          {personalInfo.title}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}
        >
          {personalInfo.name.split(' ').map((word, i) => (
            <span key={i} style={{ display: 'inline-block', marginRight: '0.3em' }}>{word}</span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem' }}
        >
          {personalInfo.heroSummary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: '1.5rem' }}
        >
          <a href="#projects" style={{
            background: 'var(--accent-primary)',
            color: 'var(--primary-bg)',
            padding: '1rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}>VIEW IMPACT</a>
          <a href="#contact" style={{
            border: '1px solid var(--text-muted)',
            color: 'var(--text-primary)',
            padding: '1rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}>GET IN TOUCH</a>
        </motion.div>
      </div>

      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          perspective: '1000px',
          minWidth: '300px'
        }}
      >
        <motion.div
          style={{
            width: '400px',
            maxWidth: '90%',
            height: '500px',
            backgroundColor: 'var(--secondary-bg)',
            borderRadius: '24px',
            border: '1px solid rgba(200, 168, 76, 0.3)',
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{
            transform: 'translateZ(50px)',
            fontSize: '10rem',
            color: 'var(--accent-primary)',
            opacity: 0.1,
            userSelect: 'none',
            fontWeight: 'bold'
          }}>YE</div>
          
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            transform: 'translateZ(80px)',
          }}>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 800, fontSize: '2rem', margin: 0 }}>ROI focused.</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0 }}>Architecting Growth.</p>
          </div>
          
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            border: '2px solid var(--accent-primary)',
            borderRadius: '12px',
            transform: 'translateZ(30px)'
          }} />
        </motion.div>
      </motion.div>
    </section>
  );
}