import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Cpu,
  User,
  Radio,
  Github,
  Linkedin,
  Instagram
} from 'lucide-react';

type Section = 'home' | 'about' | 'projects' | 'skills' | 'contact';

interface NavOverlayProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export const NavOverlay: React.FC<NavOverlayProps> = ({
  activeSection,
  onSectionChange
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Radio size={18} /> },
    { id: 'about', label: 'About Me', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Rocket size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Cpu size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Radio size={18} /> }
  ];

  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsScrollingDown(true); 
      } else {
        setIsScrollingDown(false);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-transform duration-300 ${
        isScrollingDown ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Cpu className="text-accent-500 mr-2" />
            <span className="font-bold text-xl">Yogii Portfolio...</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id as Section)}
                className={`nav-item flex items-center ${
                  activeSection === item.id
                    ? 'text-primary-500'
                    : 'text-slate-300'
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <a
              href="https://github.com/Mr-yogii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-primary-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yogii15/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-primary-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-primary-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-50"
      >
        <div className="glass-panel px-2 py-1 flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id as Section)}
              className={`p-3 rounded-full ${
                activeSection === item.id
                  ? 'text-primary-500 bg-slate-800'
                  : 'text-slate-300'
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
