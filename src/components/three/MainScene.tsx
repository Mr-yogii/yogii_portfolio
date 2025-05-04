import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Stars, 
  OrbitControls, 
  useTexture, 
  Text,
  Float,
  Html,
  PerspectiveCamera
} from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { SpaceCore } from './models/SpaceCore';
import { OrbitingModule } from './models/OrbitingModule';
import { Circuit } from './models/Circuit';
import * as THREE from 'three';

type Section = 'home' | 'projects' | 'skills' | 'about' | 'contact';

interface MainSceneProps {
  activeSection: Section;
}

export const MainScene: React.FC<MainSceneProps> = ({ activeSection }) => {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={60} />
      
      <color attach="background" args={['#000014']} />
      
      <fog attach="fog" args={['#000014', 15, 40]} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#0a84ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bf5af2" />
      
      <group>
        <SceneContent activeSection={activeSection} />
      </group>
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
      
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
        <Vignette eskil={false} offset={0.1} darkness={0.8} />
      </EffectComposer>
    </Canvas>
  );
};

interface SceneContentProps {
  activeSection: Section;
}

const SceneContent: React.FC<SceneContentProps> = ({ activeSection }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  
  // Define the positions for modules around the core
  const modulePositions = [
    { id: 'projects', position: [6, 2, 0], color: '#0a84ff' },
    { id: 'skills', position: [-2, 5, 3], color: '#30d158' },
    { id: 'about', position: [-6, -1, -2], color: '#bf5af2' },
    { id: 'contact', position: [3, -5, 1], color: '#ff9f0a' },
  ];
  
  return (
    <group ref={groupRef}>
      {/* Main core */}
      <SpaceCore isActive={activeSection === 'home'} />
      
      {/* Orbiting modules */}
      {modulePositions.map(({ id, position, color }) => (
        <OrbitingModule 
          key={id}
          section={id as Section}
          position={position as [number, number, number]}
          color={color}
          isActive={activeSection === id}
        />
      ))}
      
      {/* Circuit elements background */}
      <Circuit position={[8, -4, -10]} rotation={[0.2, 0.5, 0]} scale={3} />
      <Circuit position={[-10, 6, -8]} rotation={[-0.5, 0.2, 0.3]} scale={2.5} />
      
      {/* Floating text */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4} position={[0, 8, 0]}>
        <Text
          fontSize={1.2}
          color="#ffffff"
          font="/fonts/SpaceGrotesk-Bold.ttf"
          position={[0, 0, 0]}
        >
          ELECTRONICS & COMMUNICATION
        </Text>
      </Float>
      
      {/* Disclaimer */}
      <Html position={[0, -8, 0]} center>
        <div className="text-xs text-slate-500 opacity-50 text-center max-w-xs">
          Navigation: Click on the navigation menu or the orbiting modules to explore different sections.
        </div>
      </Html>
    </group>
  );
};