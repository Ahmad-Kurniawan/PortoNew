'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import styles from './ProjectsSection.module.css';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    num: '01',
    category: 'E-Commerce Platform',
    title: 'Nexus Commerce',
    desc: 'Headless e-commerce platform built with Next.js and Stripe featuring real-time inventory and sub-second page loads.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    image: '/projects/nexus-commerce.png',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    num: '02',
    category: 'Financial Analytics',
    title: 'Vault Finance',
    desc: 'Real-time financial analytics dashboard with live data visualization, secure web sockets, and dynamic reporting.',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: '/projects/vault-finance.png',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    num: '03',
    category: 'Design System',
    title: 'Chroma UI',
    desc: 'Open-source React component library crafted for high accessibility, performance, and minimal aesthetics.',
    tags: ['React', 'Radix UI', 'Framer Motion', 'TypeScript'],
    image: '/projects/chroma-ui.png',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    num: '04',
    category: 'Collaborative Workspace',
    title: 'Sync Workspace',
    desc: 'Real-time collaborative workspace with live cursor tracking, offline sync support, and access control.',
    tags: ['Next.js', 'Supabase', 'WebRTC', 'Tailwind'],
    image: '/projects/sync-workspace.png',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default function ProjectsSection() {
  return (
    <motion.div
      className={styles.wrapper}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className={styles.headerSection}>
        <div>
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Selected <span>Works</span>
          </h2>
        </div>
        <p className={styles.sectionSubtitle}>
          A curated showcase of modern web applications focused on speed, aesthetics, and smooth user experience.
        </p>
      </motion.div>

      <motion.div variants={item} className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={styles.projectCard}>
            <div className={styles.imageFrame}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className={styles.projectImage}
                unoptimized
              />
              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.projectMeta}>
              <div className={styles.topRow}>
                <span className={styles.projectNum}>{p.num}</span>
                <span className={styles.category}>{p.category}</span>
                <div className={styles.actions}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} aria-label="GitHub Repository">
                    <SiGithub size={14} />
                  </a>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} aria-label="Live Demo">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.projectDesc}>{p.desc}</p>

              <div className={styles.techStack}>
                {p.tags.map((tag, i) => (
                  <span key={tag} className={styles.techItem}>
                    {tag}{i < p.tags.length - 1 && <span className={styles.dot}>•</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}



