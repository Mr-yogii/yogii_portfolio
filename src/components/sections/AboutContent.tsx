import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  FileText, 
  Download
} from 'lucide-react';

export const AboutContent: React.FC = () => {
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
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Yogeshwaran_M_Resume.pdf';
    link.download = './Yogeshwaran_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
            About <span className="text-primary-500">Me</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl">
            Electronics and Communication Engineer with a passion for designing. Specialized in VLSI design, embedded systems, PCB layout, and IoT applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1"
          >
            <div className="glass-panel p-6 h-full">
              <div className="mb-6">
                <img 
                  src="./Yogii.jpg" 
                  alt="Profile" 
                  className="w-full aspect-square object-cover rounded-xl"/>
              </div>
              <h3 className="text-2xl font-bold mb-2">Yogeshwaran M</h3>
              <p className="text-primary-500 mb-4">Electronics & Communication Engineer</p>
              <div className="space-y-3 text-slate-300">
                <p><strong>Experience:</strong> Fresher</p>
                <p><strong>Location:</strong>Cuddalore, Tamilnadu, India</p>
                <p><strong>Email:</strong> yogeshwaranthedeveloper@gmail.com</p>
              </div>
              <div className="mt-6">
                <button 
                  onClick={handleDownload}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FileText size={18} className="mr-2" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="md:col-span-2"
          >
            <div className="glass-panel p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <GraduationCap className="text-primary-500 mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary-500 pl-4 pb-6">
                  <div className="text-sm text-primary-400 mb-1">2019 - 2021</div>
                  <h4 className="text-lg font-semibold">Higher Studies</h4>
                  <p className="text-slate-300">Government Higher secondary school - Indra nagar, Neyveli - 607801 </p>
                  <p className="text-sm text-slate-400 mt-2">
                    Completed Higher Secondary with a focus on Biology,Physics, Chemistry, and Mathematics.
                  </p>
                </div>
                <div className="border-l-2 border-primary-500 pl-4">
                  <div className="text-sm text-primary-400 mb-1">2021 - 2025</div>
                  <h4 className="text-lg font-semibold">BE.ECE</h4>
                  <p className="text-slate-300">Kongunadu College of Engineering and Technology, Trichy - 621215</p>
                  <p className="text-sm text-slate-400 mt-2">
                    Bachelor of Engineering in Electronics and Communication Engineering. 
                    Focused on VLSI design, embedded systems, and IoT applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Briefcase className="text-primary-500 mr-2" />
                Work Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-secondary-500 pl-4 pb-6">
                  <div className="text-sm text-secondary-400 mb-1">2025 - Present</div>
                  <h4 className="text-lg font-semibold">Intern</h4>
                  <p className="text-slate-300">SmartDV Technologies</p>
                  <p className="text-sm text-slate-400 mt-2">
                    Currently working as an intern in VLSI design verification. 
                    Gaining hands-on experience in digital design and verification methodologies.
                  </p>
                </div>
                <div className="border-l-2 border-secondary-500 pl-4">
                  <div className="text-sm text-secondary-400 mb-1">2023 - still now</div>
                  <h4 className="text-lg font-semibold">Freelancer in Iot projects and web development</h4>
                  <p className="text-slate-300">Yogii-Tech</p>
                  <p className="text-sm text-slate-400 mt-2">
                    Developed various IoT projects and web applications. 
                    Focused on creating innovative solutions for real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="text-primary-500 mr-2" />
            Certifications & Awards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-6">
              <h4 className="text-lg font-semibold mb-2">Best Paper Award - Networking</h4>
              <p className="text-sm text-slate-400">2025</p>
              <p className="text-slate-300 mt-2">Analysis of Wi-Fi Transmission and Reception using SDR </p>
            </div>
            <div className="glass-panel p-6">
              <h4 className="text-lg font-semibold mb-2">Sencond runner-up in Circuit designing</h4>
              <p className="text-sm text-slate-400">2024</p>
              <p className="text-slate-300 mt-2">Smart living style for Senior citizens</p>
            </div>
            <div className="glass-panel p-6">
              <h4 className="text-lg font-semibold mb-2">Best Paper Award - IoT Conference</h4>
              <p className="text-sm text-slate-400">2023</p>
              <p className="text-slate-300 mt-2">Recognized for research in Medical Pill box </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};