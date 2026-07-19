'use client';

import { motion } from 'framer-motion';
import { Palette, Code2, Rocket } from 'lucide-react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

const stats = [
  { value: '3+', label: 'Years Exp.' },
  { value: '40+', label: 'Projects' },
  { value: '15+', label: 'Clients' },
  { value: '100%', label: 'Commitment' },
];

const traits = [
  { icon: <Code2 size={24} />, title: 'Clean Architecture', desc: 'Writing maintainable, scalable, and well-documented code.' },
  { icon: <Palette size={24} />, title: 'Pixel Perfect UI', desc: 'Crafting engaging, accessible interfaces with attention to detail.' },
  { icon: <Rocket size={24} />, title: 'High Performance', desc: 'Optimizing for speed, caching, and blazing-fast load times.' },
];

export default function AboutSection() {
  return (
    <motion.div
      className={styles.wrapper}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className={styles.content}>
        {/* Left Column: Image */}
        <motion.div variants={item} className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <div className={styles.imageGlow}></div>
            <Image
              src="https://i.ibb.co/WWpPWmzQ/foto.jpg"
              alt="Developer Portrait"
              unoptimized
              fill
              className={styles.profileImage}
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </motion.div>

        {/* Right Column: Text & Stats */}
        <motion.div variants={item} className={styles.textColumn}>
          <div className={styles.intro}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting digital <br />
              <span className="grad-text">experiences</span> that matter
            </h2>
            <p className={styles.subtitle}>
              Fresh Graduate in Informatics Engineering passionate about
              Artificial Intelligence, Web Development, and Enterprise Systems.
              I enjoy building scalable web applications, exploring machine
              learning solutions, and developing technologies that solve
              real-world problems.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={item} className={styles.traitsGrid}>
        {traits.map((t) => (
          <div key={t.title} className={styles.traitCard}>
            <div className={styles.traitIconWrapper}>
              {t.icon}
            </div>
            <h4 className={styles.traitTitle}>{t.title}</h4>
            <p className={styles.traitDesc}>{t.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
