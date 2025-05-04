import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, HeartPulse, BrainCircuit, Cctv, Cpu, Leaf } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  image: string;
  icon: React.ReactNode;
  features: string[];
  githubLink?: string;
  demoLink?: string;
}

export const ProjectsContent: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Eye Guardian",
      description: "IoT-based surveillance robot with real-time monitoring and AI threat detection",
      detailedDescription: "Developed an autonomous surveillance robot with 360° camera coverage, implementing computer vision algorithms for intruder detection and anomaly recognition. The system features real-time alerts, night vision capability, and cloud storage integration.",
      tags: ["IoT", "Computer Vision", "Robotics", "Python", "OpenCV"],
      image: "https://images.pexels.com/photos/5077054/pexels-photo-5077054.jpeg",
      icon: <Eye className="text-blue-500" size={24} />,
      features: [
        "Real-time object detection",
        "Autonomous patrolling",
        "Cloud-based alert system",
        "Battery life > 8 hours"
      ],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 2,
      title: "HealthSense Monitor",
      description: "EMG/ECG based store monitoring with AI health analytics",
      detailedDescription: "Created a wearable health monitoring system using EMG and ECG sensors with edge computing capabilities. The device tracks muscle activity and heart signals, providing real-time health analytics through a custom dashboard with predictive anomaly detection.",
      tags: ["Biomedical", "Signal Processing", "Embedded C", "Python", "TensorFlow"],
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
      icon: <HeartPulse className="text-red-500" size={24} />,
      features: [
        "Real-time EMG/ECG monitoring",
        "AI-powered health insights",
        "Mobile app integration",
        "Emergency alert system"
      ]
    },
    {
      id: 3,
      title: "NeuroCare AI Platform",
      description: "AI-based healthcare diagnostic website with neural analysis",
      detailedDescription: "Built a comprehensive healthcare platform using deep learning models for early detection of neurological disorders. The system analyzes medical images and patient data to provide diagnostic suggestions with 92% accuracy in clinical trials.",
      tags: ["Deep Learning", "React", "Node.js", "Medical AI", "DICOM"],
      image: "https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg",
      icon: <BrainCircuit className="text-purple-500" size={24} />,
      features: [
        "Medical image analysis",
        "Patient data dashboard",
        "Doctor collaboration tools",
        "HIPAA compliant"
      ]
    },
    {
      id: 4,
      title: "AgriVision AI",
      description: "Deep learning based sugarcane disease detection system",
      detailedDescription: "Developed a convolutional neural network model that identifies 12 common sugarcane diseases from leaf images with 89% accuracy. The mobile-integrated solution helps farmers diagnose crop health in real-time and suggests treatment options.",
      tags: ["CNN", "Agriculture Tech", "Flutter", "TensorFlow Lite", "Precision Farming"],
      image: "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg",
      icon: <Leaf className="text-green-500" size={24} />,
      features: [
        "Real-time disease detection",
        "Offline mobile capability",
        "Treatment recommendations",
        "Multi-language support"
      ]
    },
    {
      id: 5,
      title: "Smart Home Energy Monitor",
      description: "IoT energy tracking system with custom PCB design",
      tags: ["PCB Design", "IoT", "Embedded Systems", "Power Electronics"],
      detailedDescription: "Designed a WiFi-enabled energy monitoring system with custom PCB that provides real-time appliance-level power consumption data and automated energy saving recommendations.",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      icon: <Cpu className="text-yellow-500" size={24} />,
      features: [
        "Circuit-level monitoring",
        "Energy usage analytics",
        "Automated reports",
        "Custom ESP32 PCB"
      ]
    },
    {
      id: 6,
      title: "Automated Surveillance Drone",
      description: "AI-powered autonomous monitoring drone",
      tags: ["Computer Vision", "Drone Tech", "Autonomous Systems", "Python"],
      detailedDescription: "Implemented an autonomous drone surveillance system with facial recognition and object tracking capabilities for industrial site monitoring.",
      image: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg",
      icon: <Cctv className="text-orange-500" size={24} />,
      features: [
        "Autonomous flight paths",
        "Real-time object tracking",
        "Night vision capability",
        "Cloud storage integration"
      ]
    }
  ];

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

  const selectedProject = projects.find(project => project.id === selectedProjectId);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          My <span className="text-primary-500">Engineering</span> Projects
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-slate-300 max-w-3xl mx-auto text-center"
        >
          Innovative solutions bridging hardware and software, with expertise in IoT, AI, embedded systems, and medical technology.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="glass-panel overflow-hidden group relative h-full flex flex-col"
            onClick={() => setSelectedProjectId(project.id)}
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="flex items-center">
                  {project.icon}
                  <span className="ml-2 text-white font-medium">{project.title}</span>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex items-center mb-3">
                {project.icon}
                <h3 className="text-xl font-semibold ml-2">{project.title}</h3>
              </div>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-800/50 text-primary-400 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="bg-slate-800/50 text-slate-400 text-xs px-2 py-1 rounded">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProjectId(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 md:h-80 overflow-hidden relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="flex items-center">
                  {selectedProject.icon}
                  <h2 className="text-2xl md:text-3xl font-bold text-white ml-3">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                  <p className="text-slate-300 mb-6">{selectedProject.detailedDescription}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="glass-panel-inner p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-slate-800 text-primary-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      {(selectedProject.githubLink || selectedProject.demoLink) && (
                        <>
                          <h3 className="text-lg font-semibold">Project Links</h3>
                          <div className="flex flex-col space-y-3">
                            {selectedProject.githubLink && (
                              <a 
                                href={selectedProject.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition"
                              >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View on GitHub
                              </a>
                            )}
                            {selectedProject.demoLink && (
                              <a 
                                href={selectedProject.demoLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg transition text-white"
                              >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 15c3.859 0 7-3.141 7-7s-3.141-7-7-7-7 3.141-7 7 3.141 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.757 5-5 5-5-2.243-5-5 2.757-5 5-5z" />
                                </svg>
                                Live Demo
                              </a>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6 space-x-4">
                <button 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg shadow-neon-blue transition"
                  onClick={() => window.open(selectedProject.githubLink || 'https://github.com/Mr-yogii', '_blank')}
                  disabled={!selectedProject.githubLink}
                >
                  View Code
                </button>
                <button 
                  className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition"
                  onClick={() => setSelectedProjectId(null)}
                >
                  Close Project
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};