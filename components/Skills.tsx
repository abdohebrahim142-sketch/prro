"use client";

import { motion } from 'framer-motion';
import { skills } from '@/lib/content';

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
        Architectural <span style={{ color: 'var(--accent-primary)' }}>Stack</span>
      </h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          background: 'linear-gradient(135deg, var(--secondary-bg) 0%, #1e293b 100%)',
          padding: '3rem',
          borderRadius: '24px',
          border: '1px solid var(--accent-primary)',
          marginBottom: '4rem',
          textAlign: 'center'
        }}
      >
        <span style={{ color: 'var(--accent-primary)', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase' }}>
          Core Differentiation
        </span>
        <h3 style={{ fontSize: '2rem', margin: '1rem 0' }}>{skills.superpower.name}</h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          {skills.superpower.description}
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
        {skills.technical.map((cat, i) => (
          <div key={i}>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase' }}>
              {cat.category}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {cat.items.map((skill, idx) => (
                <motion.span 
                  key={idx}
                  whileHover={{ scale: 1.05, color: 'var(--accent-primary)' }}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--secondary-bg)',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'default'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Soft Intelligence & Leadership</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {skills.soft.map((skill, i) => (
            <span key={i} style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '1rem' }}>
              {skill} {i !== skills.soft.length - 1 && <span style={{ color: 'var(--accent-primary)', marginLeft: '1rem' }}>•</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}