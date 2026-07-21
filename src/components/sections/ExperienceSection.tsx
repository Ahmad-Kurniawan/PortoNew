'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import styles from './ExperienceSection.module.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  },
};

const experiences = [
  {
    id: '01',
    role: 'Odoo 19 ERP Implementor',
    company: 'CV Sadata Teknologi Integrasi',
    location: 'Pekanbaru, Indonesia',
    period: '2024 — Present',
    desc: 'Mengimplementasikan dan mengonfigurasi sistem ERP Odoo 19 secara end-to-end untuk mendukung optimalisasi alur bisnis, manajemen inventaris, dan otomatisasi proses operasional klien.',
    current: true,
    tech: ['Odoo 19', 'Python', 'PostgreSQL', 'ERP Customization', 'Business Workflows'],
  },
  {
    id: '02',
    role: 'Front-End Developer',
    company: 'Dashboard Pemantauan Lahan (Polda Riau)',
    location: 'Riau, Indonesia',
    period: '2024',
    desc: 'Berperan sebagai pengembang antarmuka utama dalam pembangunan sistem dashboard pemantauan lahan berbasis geospasial untuk Polda Riau guna menyajikan visualisasi data monitoring wilayah secara intuitif.',
    current: false,
    tech: ['React', 'TypeScript', 'Dashboard UI', 'Geospatial Data', 'Tailwind CSS'],
  },
  {
    id: '03',
    role: 'Front-End Developer (Magang)',
    company: 'Prodi Teknik Informatika, UIN Suska Riau',
    location: 'Pekanbaru, Indonesia',
    period: '2023 — 2024',
    desc: 'Merancang dan membangun antarmuka pengguna (front-end) pada Dashboard TIF untuk Modul Kerja Praktik, meningkatkan efisiensi dan transparansi alur akademik kerja praktik mahasiswa.',
    current: false,
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
  },
];

export default function ExperienceSection() {
  return (
    <motion.div
      className={styles.wrapper}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Clean Minimal Header */}
      <motion.div variants={item} className={styles.header}>
        <p className="section-label">Experience</p>
        <h2 className="section-title grad-text">
          Career History <br />
        </h2>
      </motion.div>

      {/* Timeline List */}
      <motion.div variants={item} className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>

        <div className={styles.experienceList}>
          {experiences.map((e) => (
            <motion.div
              key={e.id}
              variants={item}
              className={`${styles.card} ${e.current ? styles.cardCurrent : ''}`}
            >
              {/* Timeline Dot */}
              <div className={styles.timelineDot} />

              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.titleGroup}>
                  <div className={styles.roleRow}>
                    <h3 className={styles.role}>{e.role}</h3>
                    {e.current && <span className={styles.activeTag}>Current</span>}
                  </div>
                  <div className={styles.companyMeta}>
                    <span className={styles.company}><Building2 size={14} /> {e.company}</span>
                    <span className={styles.metaDot}>•</span>
                    <span className={styles.location}><MapPin size={13} /> {e.location}</span>
                  </div>
                </div>

                <div className={`${styles.periodBadge} ${e.current ? styles.periodCurrent : ''}`}>
                  <Calendar size={13} />
                  <span>{e.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className={styles.desc}>{e.desc}</p>

              {/* Tech Stack */}
              <div className={styles.techStack}>
                {e.tech.map((tech, idx) => (
                  <span key={idx} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}


