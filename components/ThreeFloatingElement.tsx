'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingElementProps {
  position?: [number, number, number];
  color?: string;
}

export function FloatingElement({ position = [0, 0, 0], color = '#DA291C' }: FloatingElementProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * 0.3;
      meshRef.current.rotation.y = mouse.x * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  );
}

