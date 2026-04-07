"use client";

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/content';

export default function About() {
  return (
    <section id="about">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
          >
            The <span style={{ color: 'var(--accent-primary)' }}>Translation Layer</span>
          </motion.h2>
          
          {personalInfo.aboutParagraphs.map((para, i) => (
            <motion.p 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '2rem',
          backgroundColor: 'var(--secondary-bg)',
          padding: '3rem',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {personalInfo.highlightStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                {stat.value}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
          
          <div style={{ gridColumn: 'span 2', marginTop: '1rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', opacity: 0.8 }}>
              "Optimizing for profitability, not just accuracy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}