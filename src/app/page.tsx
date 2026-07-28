'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import OptionWheel from '@/components/OptionWheel/OptionWheel';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import LightRays from '@/components/LightRays/LightRays';

import styles from './page.module.css';



const NAV_ITEMS = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

const pageVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

export default function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const handleNavigateToProjects = useCallback(() => {
    const projectsIndex = NAV_ITEMS.indexOf('Projects');
    if (projectsIndex !== -1 && projectsIndex !== activeIndex) {
      setDirection(projectsIndex > activeIndex ? 1 : -1);
      setActiveIndex(projectsIndex);
    }
  }, [activeIndex]);

  const SECTION_MAP: Record<string, React.ReactNode> = {
    Home: <HomeSection onNavigateToProjects={handleNavigateToProjects} />,
    About: <AboutSection />,
    Experience: <ExperienceSection />,
    Skills: <SkillsSection />,
    Projects: <ProjectsSection />,
    Contact: <ContactSection />,
  };

  const activeName = NAV_ITEMS[activeIndex];

  return (
    <main className={styles.main}>
      <div className={styles.globalRaysBackground}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={1.0}
          rayLength={1.5}
          intensity={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      {/* ── Left Panel: OptionWheel navigator ── */}
      <aside className={styles.leftPanel}>
      
        {isMobile ? (
          <div className={styles.mobileNav}>
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item}
                className={`${styles.mobileNavItem} ${i === activeIndex ? styles.mobileNavActive : ''}`}
                onClick={() => handleChange(i)}
                aria-label={`Go to ${item}`}
              >
                {item}
              </button>
            ))}
          </div>
        ) : (
          <>
            {/* The OptionWheel */}
            <div className={styles.wheelWrap}>
              <OptionWheel
                items={NAV_ITEMS}
                defaultSelected={activeIndex}
                onChange={handleChange}
                textColor="#3a4a5e"
                activeColor="#f1f5f9"
                side="left"
                fontSize={4.3}
                spacing={1.55}
                curve={1}
                tilt={5}
                blur={3}
                fade={0.32}
                smoothing={220}
                inset={150}
                loop={false}
                draggable
              />
            </div>

            {/* Index indicator dots */}
            <div className={styles.indicator}>
              {NAV_ITEMS.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                />
              ))}
            </div>

            {/* Scroll hint */}
            <p className={styles.hint}>scroll or drag to navigate</p>
          </>
        )}
      </aside>

      {/* ── Right Panel: Section Content ── */}
      <section className={styles.rightPanel} aria-live="polite" aria-label={activeName}>


        {/* Animated section content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeName}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.sectionContent}
          >
            {SECTION_MAP[activeName]}
          </motion.div>
        </AnimatePresence>
      </section>


    </main>
  );
}
