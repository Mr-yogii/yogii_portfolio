import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit as Circuit, Cpu, Layers, Wifi } from 'lucide-react';

interface HomeContentProps {
  setActiveSection: (section: 'home' | 'projects' | 'skills' | 'about' | 'contact') => void;
}

export const HomeContent: React.FC<HomeContentProps> = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const techIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center min-h-[70vh]"
    >
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text">
            <span className="text-primary-500">Hi, I'm </span>
            <span className="text-foreground">Yogeshwaran M</span>
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="glass-panel p-4 mb-6 inline-block">
            <h2 className="text-xl md:text-2xl font-medium">
             Embedded Systems Engineer
            </h2>
          </div>
        </motion.div>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-slate-300 mb-8 max-w-lg"
        >
          Specializing in VLSI design, embedded systems, PCB layout, and IoT solutions. 
          Building the future through innovative circuit design and digital electronics.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex space-x-4"
        >
          <button 
            onClick={() => setActiveSection('projects')}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-neon-blue"
          >
            View Projects
          </button>
          <button 
            onClick={() => setActiveSection('contact')}
            className="bg-transparent border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-neon-purple"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        className="md:w-1/2 grid grid-cols-2 gap-6"
      >
        <motion.div 
          variants={techIconVariants}
          className="glass-panel p-6 flex flex-col items-center justify-center aspect-square text-center"
        >
          <Circuit size={50} className="text-primary-500 mb-4" />
          <h3 className="text-lg font-medium">VLSI Design</h3>
          <p className="text-sm text-slate-400">Chip architecture & verification</p>
        </motion.div>
        
        <motion.div 
          variants={techIconVariants}
          className="glass-panel p-6 flex flex-col items-center justify-center aspect-square text-center"
        >
          <Cpu size={50} className="text-secondary-500 mb-4" />
          <h3 className="text-lg font-medium">Embedded Systems</h3>
          <p className="text-sm text-slate-400">Firmware & hardware integration</p>
        </motion.div>
        
        <motion.div 
          variants={techIconVariants}
          className="glass-panel p-6 flex flex-col items-center justify-center aspect-square text-center"
        >
          <Layers size={50} className="text-accent-500 mb-4" />
          <h3 className="text-lg font-medium">PCB Layout</h3>
          <p className="text-sm text-slate-400">High-frequency & multi-layer boards</p>
        </motion.div>
        
        <motion.div 
          variants={techIconVariants}
          className="glass-panel p-6 flex flex-col items-center justify-center aspect-square text-center"
        >
          <Wifi size={50} className="text-warning mb-4" />
          <h3 className="text-lg font-medium">IoT Solutions</h3>
          <p className="text-sm text-slate-400">Connected devices & smart systems</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};