"use client";

import { motion } from 'framer-motion';
import { experience } from '@/lib/content';

export default function Experience() {
  return (
    <section id="experience">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}
      >
        Career <span style={{ color: 'var(--accent-primary)' }}>Trajectory</span>
      </motion.h2>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          height: '100%',
          background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
          opacity: 0.3
        }} />

        {experience.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              display: 'flex',
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: '4rem',
              width: '100%',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '20px',
              transform: 'translateX(-50%)',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'var(--accent-primary)',
              zIndex: 2
            }} />

            <div style={{
              width: '45%',
              backgroundColor: 'var(--secondary-bg)',
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)'
            }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600 }}>
                {exp.startDate} — {exp.endDate}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{exp.role}</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '1rem' }}>
                {exp.company} | {exp.industry}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                {exp.coreFocus}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--text-primary)', 
                    marginBottom: '0.8rem',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>→</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}