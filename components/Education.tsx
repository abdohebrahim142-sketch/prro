"use client";

import { motion } from 'framer-motion';
import { education } from '@/lib/content';

export default function Education() {
  return (
    <section id="education" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Academic <span style={{ color: 'var(--accent-primary)' }}>Foundation</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {education.map((edu, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            style={{
              padding: '2rem',
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: '12px',
              borderLeft: '4px solid var(--accent-primary)'
            }}
          >
            <h3 style={{ fontSize: '1.25rem' }}>{edu.institution}</h3>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{edu.degree}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{edu.field} | {edu.startYear} - {edu.endYear}</p>
            {edu.highlights && (
              <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {edu.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}