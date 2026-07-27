'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase, CheckCircle2, Send } from 'lucide-react';
import styles from './ContactSection.module.css';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <motion.div
      className={styles.wrapper}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className={styles.intro}>
        <p className="section-label">Contact</p>
        <h2 className="section-title">
          Let&apos;s <span>Collaborate</span>
        </h2>
        <p className={styles.subtitle}>
          Have a project in mind or want to discuss opportunities? My inbox is open.
        </p>
      </motion.div>

      {sent && (
        <motion.div
          className={styles.successBanner}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <CheckCircle2 size={18} /> Message sent! I&apos;ll get back to you shortly.
        </motion.div>
      )}

      <div className={styles.content}>
        <motion.form variants={item} className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Name</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
            Send Message
            <Send size={16} />
          </button>
        </motion.form>

        <motion.div variants={item} className={styles.contacts}>
          {[
            { icon: <Mail size={20} />, label: 'Email', value: 'ahmad.krnwn06@gmail.com' },
            { icon: <MapPin size={20} />, label: 'Location', value: 'Pekanbaru, Indonesia' },
            { icon: <Briefcase size={20} />, label: 'Status', value: 'Available for work' },
          ].map((c) => (
            <div key={c.label} className={styles.contactItem}>
              <span className={styles.contactIcon}>{c.icon}</span>
              <div>
                <p className={styles.contactLabel}>{c.label}</p>
                <p className={styles.contactValue}>{c.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
