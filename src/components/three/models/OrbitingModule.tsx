import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Text, useTexture, MeshTransmissionMaterial } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

type Section = 'home' | 'projects' | 'skills' | 'about' | 'contact';

interface OrbitingModuleProps {
  section: Section;
  position: [number, number, number];
  color: string;
  isActive: boolean;
}

export const OrbitingModule: React.FC<OrbitingModuleProps> = ({ 
  section, 
  position, 
  color,
  isActive
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  const getModuleLabel = () => {
    switch (section) {
      case 'projects': return 'Projects';
      case 'skills': return 'Skills';
      case 'about': return 'About';
      case 'contact': return 'Contact';
      default: return section;
    }
  };
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
    
    if (glowRef.current) {
      glowRef.current.scale.setScalar(
        1.2 + Math.sin(clock.getElapsedTime() * 2) * 0.05
      );
    }
  });
  
  return (
    <group position={position}>
      <motion.mesh
        ref={meshRef}
        scale={isActive ? 1.3 : 1}
        animate={{
          scale: isActive ? 1.3 : hovered ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          backsideThickness={0.5}
          transmissionSampler
          transmission={1}
          reflectivity={0.2}
          roughness={0}
          chromaticAberration={0.06}
          distortion={0.5}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color={color}
        />
      </motion.mesh>
      
      {/* Glow effect */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={isActive ? 0.1 : 0.05} 
        />
      </mesh>
      
      {/* Module label */}
      <Html position={[0, -1.8, 0]} center>
        <div 
          className={`text-center font-medium transition-all duration-300 ${
            isActive || hovered ? 'opacity-100 scale-110' : 'opacity-70'
          }`} 
          style={{ color }}
        >
          {getModuleLabel()}
        </div>
      </Html>
    </group>
  );
};