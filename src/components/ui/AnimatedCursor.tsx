import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerDetection = () => {
      const element = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const computedStyle = element ? window.getComputedStyle(element) : null;
      setIsPointer(computedStyle?.cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handlePointerDetection);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handlePointerDetection);
    };
  }, [mousePosition.x, mousePosition.y]);

  if (window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-500 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 1500,
          damping: 40,
        }}
      />
    </>
  );
};