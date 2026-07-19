'use client';

import { motion } from 'framer-motion';
import { Activity, BarChart2, Notebook, Bug, ArrowUpRight } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import styles from './ProjectsSection.module.css';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: 'Nexus Commerce',
    desc: 'Headless e-commerce platform built with Next.js and Stripe. Features real-time inventory and sub-second page loads.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    icon: <Activity size={20} />,
  },
  {
    title: 'Vault Finance',
    desc: 'Financial analytics dashboard with real-time data visualization, secure web sockets, and dynamic reporting.',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    icon: <BarChart2 size={20} />,
  },
  {
    title: 'Chroma UI',
    desc: 'An open-source React component library focused on accessibility and minimal design. 10k+ weekly npm downloads.',
    tags: ['React', 'Radix UI', 'Framer Motion'],
    icon: <Notebook size={20} />,
  },
  {
    title: 'Sync Workspace',
    desc: 'Collaborative workspace application with real-time cursor tracking, offline support, and role-based access control.',
    tags: ['Next.js', 'Supabase', 'WebRTC'],
    icon: <Bug size={20} />,
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
      <motion.div variants={item}>
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          Selected <span>Works</span>
        </h2>
      </motion.div>

      <motion.div variants={item} className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.icon}>{p.icon}</span>
              <a href="#" aria-label="Visit project" className={styles.externalLink}>
                <ArrowUpRight size={18} />
              </a>
            </div>
            
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.desc}</p>
            
            <div className={styles.cardTags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            
            <div className={styles.cardLinks}>
              <a href="#" className={styles.link}>
                <SiGithub size={16} /> Source Code
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
