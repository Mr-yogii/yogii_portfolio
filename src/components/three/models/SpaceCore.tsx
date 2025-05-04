import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface SpaceCoreProps {
  isActive: boolean;
}

export const SpaceCore: React.FC<SpaceCoreProps> = ({ isActive }) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      coreRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
    
    if (glowRef.current) {
      glowRef.current.scale.setScalar(
        1.2 + Math.sin(clock.getElapsedTime() * 2) * 0.05
      );
    }
  });
  
  return (
    <group>
      {/* The main core sphere */}
      <Sphere ref={coreRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color={isActive ? "#0a84ff" : "#0a4a8f"}
          distort={isActive ? 0.4 : 0.2}
          speed={isActive ? 4 : 2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Inner glow */}
      <Sphere ref={glowRef} args={[2.1, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color={isActive ? "#0a84ff" : "#0a4a8f"} 
          transparent 
          opacity={0.1} 
        />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[2.3, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color={isActive ? "#0a84ff" : "#0a4a8f"} 
          transparent 
          opacity={0.05} 
        />
      </Sphere>
      
      {/* Circuit rings around the core */}
      <CircuitRing 
        radius={3} 
        tubeRadius={0.03} 
        isActive={isActive} 
        rotationSpeed={0.3}
        color="#0a84ff"
      />
      <CircuitRing 
        radius={3.5} 
        tubeRadius={0.02} 
        isActive={isActive} 
        rotationSpeed={-0.2}
        color="#30d158"
        rotation={[Math.PI / 2, 0, 0]}
      />
      <CircuitRing 
        radius={4} 
        tubeRadius={0.015} 
        isActive={isActive} 
        rotationSpeed={0.15}
        color="#bf5af2"
        rotation={[0, 0, Math.PI / 4]}
      />
    </group>
  );
};

interface CircuitRingProps {
  radius: number;
  tubeRadius: number;
  isActive: boolean;
  rotationSpeed: number;
  color: string;
  rotation?: [number, number, number];
}

const CircuitRing: React.FC<CircuitRingProps> = ({ 
  radius, 
  tubeRadius, 
  isActive, 
  rotationSpeed, 
  color,
  rotation = [0, 0, 0] 
}) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = clock.getElapsedTime() * rotationSpeed;
      ringRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed * 0.7;
    }
  });
  
  return (
    <group rotation={rotation as unknown as THREE.Euler}>
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, tubeRadius, 16, 100]} />
        <meshStandardMaterial 
          color={color} 
          emissive={isActive ? color : undefined} 
          emissiveIntensity={isActive ? 2 : 0} 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
    </group>
  );
};