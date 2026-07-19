'use client';

import { motion } from 'framer-motion';
import styles from './ExperienceSection.module.css';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechNova Inc.',
    period: '2023 — Present',
    desc: 'Architecting scalable frontend solutions, leading a team of 4 developers, and migrating legacy codebases to Next.js. Improved performance metrics by 40%.',
    current: true,
    tech: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Creative Labs',
    period: '2021 — 2023',
    desc: 'Developed interactive marketing campaigns and e-commerce platforms for global brands using React and Node.js. Integrated various headless CMS solutions.',
    current: false,
    tech: ['Node.js', 'Express', 'React', 'MongoDB'],
  },
  {
    role: 'Web Developer',
    company: 'Digital Agency',
    period: '2019 — 2021',
    desc: 'Built custom modern web applications and optimized client websites for SEO and performance, ensuring WCAG accessibility compliance.',
    current: false,
    tech: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
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
      <motion.div variants={item} className={styles.header}>
        <p className="section-label">Experience</p>
        <h2 className="section-title">
          Career <br />
          <span className="grad-text">History</span>
        </h2>
      </motion.div>

      <motion.div variants={item} className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        
        <div className={styles.experienceList}>
          {experiences.map((e, i) => (
            <div key={i} className={styles.card}>
              <div className={`${styles.timelineDot} ${e.current ? styles.dotCurrent : ''}`}></div>

              <div className={styles.cardHeader}>
                <div className={styles.titleGroup}>
                  <h3 className={styles.role}>{e.role}</h3>
                  <p className={styles.company}>{e.company}</p>
                </div>
                <div className={`${styles.periodBadge} ${e.current ? styles.periodCurrent : ''}`}>
                  {e.period}
                </div>
              </div>
              
              <p className={styles.desc}>{e.desc}</p>
              
              <div className={styles.techStack}>
                {e.tech.map((tech, idx) => (
                  <span key={idx} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
