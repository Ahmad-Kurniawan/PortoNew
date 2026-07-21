'use client';

import { motion } from 'framer-motion';
import { SiSupabase,SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiFigma, SiDocker, SiPostgresql, SiGit, SiTailwindcss, SiPrisma, SiPython, SiShadcnui } from '@icons-pack/react-simple-icons';
import styles from './SkillsSection.module.css';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

const categories = [
  {
    title: 'Frontend & UI',
    skills: [
      { name: 'React', icon: <SiReact size={26} /> },
      { name: 'Next.js', icon: <SiNextdotjs size={26} /> },
      { name: 'TypeScript', icon: <SiTypescript size={26} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={26} /> },
      { name: 'Shadcn UI', icon: <SiShadcnui size={26} /> },
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs size={26} /> },
      { name: 'Python', icon: <SiPython size={26} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={26} /> },
      { name: 'Prisma', icon: <SiPrisma size={26} /> },
      { name: 'Supabase', icon: <SiSupabase size={26} /> },
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: <SiGit size={26} /> },
      { name: 'Docker', icon: <SiDocker size={26} /> },
      { name: 'Figma', icon: <SiFigma size={26} /> },
    ]
  }
];

export default function SkillsSection() {
  return (
    <motion.div
      className={styles.wrapper}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <p className="section-label">Expertise</p>
        <h2 className="section-title">
          My <span>Tech Stack</span>
        </h2>
      </motion.div>

      <div className={styles.categoriesWrapper}>
        {categories.map((category) => (
          <motion.div key={category.title} variants={item} className={styles.categoryGroup}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.stackGrid}>
              {category.skills.map((t) => (
                <div key={t.name} className={`glass-card ${styles.stackItem}`}>
                  <span className={styles.stackIcon}>{t.icon}</span>
                  <span className={styles.stackName}>{t.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
