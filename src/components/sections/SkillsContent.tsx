import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, BrainCircuit as Circuit, Wifi, Microwave as Microchip, Waves, Lock, Server, GitBranch, Database } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
  color: string;
}

export const SkillsContent: React.FC = () => {
  const skills: Skill[] = [
    { name: "VLSI Design", icon: <Microchip size={24} />, category: "Hardware", color: "rgb(10, 132, 255)" },
    { name: "PCB Layout", icon: <Layers size={24} />, category: "Hardware", color: "rgb(48, 209, 88)" },
    { name: "Embedded C/C++", icon: <Circuit size={24} />, category: "Software", color: "rgb(191, 90, 242)" },
    { name: "Python", icon: <Circuit size={24} />, level: null, category: "Software", color: "rgb(90, 242, 217)" },
    { name: "Digital Signal Processing", icon: <Waves size={24} />, level: 80, category: "Signal Processing", color: "rgb(255, 159, 10)" },
    { name: "Microcontroller Programming", icon: <Cpu size={24} />, level: 90, category: "Embedded", color: "rgb(10, 132, 255)" },
    { name: "IoT Architecture", icon: <Wifi size={24} />, level: 85, category: "IoT", color: "rgb(191, 90, 242)" },
    { name: "Git/Version Control", icon: <GitBranch size={24} />, level: 80, category: "Tools", color: "rgb(10, 132, 255)" },
    { name: "Vivado", icon: <GitBranch size={24} />, level: 75, category: "Tools", color: "rgb(176, 224, 62)" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-4 neon-text"
        >
          Technical <span className="text-primary-500">Skills</span>
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-slate-300 max-w-2xl"
        >
          An overview of my technical expertise in electronics, embedded systems, 
          and related technologies that I've mastered throughout my career.
        </motion.p>
      </motion.div>

      <div className="mb-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-panel p-6"
            >
              <div className="flex items-center mb-3">
                <div 
                  className="p-2 rounded-lg mr-3" 
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <div style={{ color: skill.color }}>{skill.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-sm text-slate-400">{skill.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3 
          variants={itemVariants}
          className="text-2xl font-bold mb-6"
        >
          Skills by Category
        </motion.h3>
        
        <div className="space-y-8">
          {categories.map((category) => (
            <motion.div 
              key={category}
              variants={itemVariants}
              className="glass-panel p-6"
            >
              <h4 className="text-xl font-semibold mb-4">{category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-3 rounded-lg" 
                      style={{ backgroundColor: `${skill.color}10` }}
                    >
                      <div className="mr-3" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div>
                        <div className="font-medium">{skill.name}</div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
