"use client";

import { motion } from 'framer-motion';
import { contactSection, personalInfo } from '@/lib/content';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const inputStyle = {
  backgroundColor: 'var(--primary-bg)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '1rem',
  borderRadius: '8px',
  color: 'var(--text-primary)',
  fontFamily: 'var(--body-font)',
  fontSize: '1rem',
  outline: 'none'
};

export default function Contact() {
  return (
    <section id="contact">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 0.8fr', 
        gap: '6rem', 
        backgroundColor: 'var(--secondary-bg)', 
        padding: '5rem', 
        borderRadius: '32px',
        border: '1px solid rgba(200, 168, 76, 0.1)'
      }}>
        <div>
          <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>{contactSection.headline}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px' }}>
            {contactSection.invitationText}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <input type="text" placeholder="Name" style={inputStyle} />
              <input type="email" placeholder="Email" style={inputStyle} />
            </div>
            <textarea placeholder="Message" rows={5} style={inputStyle}></textarea>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--primary-bg)',
                border: 'none',
                padding: '1.2rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              SEND BRIEF
            </motion.button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2.5rem' }}>
          <div>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</h4>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
              <HiLocationMarker /> {personalInfo.location}
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</h4>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
              <HiMail /> {personalInfo.email}
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Profiles</h4>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.8rem' }}>
              <a href={personalInfo.linkedin} target="_blank" style={{ color: 'var(--text-primary)' }}><FaLinkedin /></a>
              <a href={personalInfo.github} target="_blank" style={{ color: 'var(--text-primary)' }}><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
