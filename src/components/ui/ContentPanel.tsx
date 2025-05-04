import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeContent } from '../sections/HomeContent';
import { AboutContent } from '../sections/AboutContent';
import { ProjectsContent } from '../sections/ProjectsContent';
import { SkillsContent } from '../sections/SkillsContent';
import { ContactContent } from '../sections/ContactContent';

type Section = 'home' | 'about' | 'projects' | 'skills' | 'contact';

interface ContentPanelProps {
  activeSection: Section;
}

export const ContentPanel: React.FC<ContentPanelProps> = ({ activeSection }) => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <div className="min-h-screen w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ type: 'tween', duration: 0.5 }}
          className="container mx-auto px-4 py-24 md:py-32"
        >
          {activeSection === 'home' && <HomeContent />}
          {activeSection === 'about' && <AboutContent />}
           {activeSection === 'projects' && <ProjectsContent />}
          {activeSection === 'skills' && <SkillsContent />}
          {activeSection === 'contact' && <ContactContent />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};