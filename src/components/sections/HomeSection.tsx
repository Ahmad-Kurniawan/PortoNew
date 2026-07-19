'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import styles from './HomeSection.module.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

export default function HomeSection() {
  return (
    <motion.div
      className={styles.wrapper}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={item} className={styles.name}>
        Ahmad Kurniawan<br />
        <span className={styles.role}>
          Software Developer <span className={styles.separator}>|</span> <span className={styles.roleHighlight}>AI & Machine Learning Enthusiast</span>
        </span>
      </motion.h1>

      <motion.p variants={item} className={styles.tagline}>
        Building high-performance web applications with a focus on fluid animations, modern architecture, and exceptional user experiences.
      </motion.p>

      <motion.div variants={item} className={styles.location}>
        <MapPin size={16} /> Based in PekanBaru • Indonesia 
      </motion.div>

      <motion.div variants={item} className={styles.actions}>
        <div className={styles.ctas}>
          <a href="#" className="btn-primary">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#" className="btn-outline">
            <Download size={16} /> Resume
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/Ahmad-Kurniawan" className={styles.socialLink} aria-label="GitHub">
            <SiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ahmad-kurniawan-2100a0330" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
            </svg>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Twitter">
            <SiX size={18} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
