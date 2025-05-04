import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CircuitProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export const Circuit: React.FC<CircuitProps> = ({ 
  position, 
  rotation = [0, 0, 0],
  scale = 1 
}) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  
  // Create a circuit pattern with lines and nodes
  return (
    <group 
      ref={groupRef} 
      position={position}
      rotation={rotation as unknown as THREE.Euler}
      scale={scale}
    >
      {/* Horizontal lines */}
      {[-2, -1, 0, 1, 2].map((y, i) => (
        <mesh key={`h-${i}`} position={[0, y * 0.5, 0]}>
          <boxGeometry args={[4, 0.02, 0.01]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#0a84ff" : "#30d158"} 
            emissive={i % 2 === 0 ? "#0a84ff" : "#30d158"} 
            emissiveIntensity={0.5} 
            transparent 
            opacity={0.7} 
          />
        </mesh>
      ))}
      
      {/* Vertical lines */}
      {[-2, -1, 0, 1, 2].map((x, i) => (
        <mesh key={`v-${i}`} position={[x * 0.5, 0, 0]}>
          <boxGeometry args={[0.02, 4, 0.01]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#bf5af2" : "#0a84ff"} 
            emissive={i % 2 === 0 ? "#bf5af2" : "#0a84ff"} 
            emissiveIntensity={0.5} 
            transparent 
            opacity={0.7} 
          />
        </mesh>
      ))}
      
      {/* Circuit nodes at intersections */}
      {[-2, -1, 0, 1, 2].map((x) => 
        [-2, -1, 0, 1, 2].map((y, i) => (
          <mesh key={`node-${x}-${y}`} position={[x * 0.5, y * 0.5, 0.02]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#0a84ff" : i % 3 === 1 ? "#30d158" : "#bf5af2"} 
              emissive={i % 3 === 0 ? "#0a84ff" : i % 3 === 1 ? "#30d158" : "#bf5af2"} 
              emissiveIntensity={0.8} 
            />
          </mesh>
        ))
      )}
      
      {/* Random "components" */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 3;
        const y = (Math.random() - 0.5) * 3;
        return (
          <mesh key={`component-${i}`} position={[x, y, 0.03]}>
            <boxGeometry args={[0.2, 0.1, 0.05]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#ff9f0a" : "#0a84ff"} 
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
};