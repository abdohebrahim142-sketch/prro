"use client";

import { motion } from 'framer-motion';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <section id="projects">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3.5rem' }}>Key <span style={{ color: 'var(--accent-primary)' }}>Engagements</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2.5rem' }}>
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            style={{
              backgroundColor: 'var(--secondary-bg)',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative'
            }}
          >
            <div style={{ padding: '2.5rem' }}>
              <span style={{ 
                backgroundColor: 'rgba(200, 168, 76, 0.1)', 
                color: 'var(--accent-primary)', 
                padding: '0.4rem 0.8rem', 
                borderRadius: '4px', 
                fontSize: '0.75rem', 
                fontWeight: 700 
              }}>
                {project.category}
              </span>
              <h3 style={{ fontSize: '1.75rem', margin: '1.5rem 0 1rem 0' }}>{project.name}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '60px' }}>{project.description}</p>
              
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>IMPACT / ROLE:</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{project.contribution}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)' }}>#{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}