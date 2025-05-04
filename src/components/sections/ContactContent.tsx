import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Globe, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

export const ContactContent: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('idle');

    try {
      await emailjs.send(
        'service_6le290q',  
        'template_w8uhd7o', 
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          reply_to: formState.email
        },
        'WVythmGr8fu9ZBxft' 
      );

      setSendStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSendStatus('idle');
      }, 5000);
    }
  };

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
          Get in <span className="text-primary-500">Touch</span>
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-slate-300 max-w-2xl"
        >
          Interested in working together or have a question about my work? 
          Feel free to reach out through the form or direct contact options below.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-2"
        >
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                  placeholder="Your message here..."
                />
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-neon-blue flex items-center ${
                    isSending ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {sendStatus === 'success' && (
                  <div className="text-green-500 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent!
                  </div>
                )}
                {sendStatus === 'error' && (
                  <div className="text-red-500 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed to send
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-1"
        >
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8 mb-8"
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-primary-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:yogeshwaranthedeveloper@gmail.com" className="text-slate-300 hover:text-primary-500 transition">
                    yogeshwaranthedeveloper@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-secondary-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+919344073844" className="text-slate-300 hover:text-secondary-500 transition">
                    +91 9344073844
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-accent-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-slate-300">Cuddalore, Tamilnadu, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="text-warning mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Website</h4>
                  <a href="https://www.yogii-tech.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-warning transition">
                    www.yogii-tech.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Availability</h3>
            <p className="text-slate-300 mb-4">
              Currently available for:
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Hardware Consulting
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                PCB Design Projects
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                VLSI Implementation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                IoT System Architecture (Limited)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                Full-time Employment (Not Available)
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};