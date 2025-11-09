'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

export function ThreeScene() {
  const [mounted, setMounted] = useState(false);
  const [Canvas, setCanvas] = useState<any>(null);
  const [components, setComponents] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    
    // Load Three.js components dynamically
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei'),
    ]).then(([fiber, drei]) => {
      setCanvas(() => fiber.Canvas);
      setComponents({
        useFrame: fiber.useFrame,
        Points: drei.Points,
        PointMaterial: drei.PointMaterial,
      });
    });
  }, []);

  if (!mounted || !Canvas || !components) {
    return null;
  }

  const { useFrame, Points, PointMaterial } = components;

  function AnimatedParticles({ count = 2000 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
      const temp = [];
      for (let i = 0; i < count; i++) {
        const time = Math.random() * 100;
        const factor = 20 + Math.random() * 100;
        const speed = 0.01 + Math.random() / 200;
        const x = Math.cos(2) * factor;
        const y = Math.sin(2) * factor;
        const z = Math.sin(2) * factor;
        temp.push({ time, factor, speed, x, y, z });
      }
      return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state: any) => {
      if (!mesh.current) return;

      particles.forEach((particle, i) => {
        let { factor, speed, x, y, z } = particle;
        const t = (particle.time += speed);

        dummy.position.set(
          x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        );
        const s = Math.cos(t);
        dummy.scale.set(s, s, s);
        dummy.rotation.set(s * 5, s * 5, s * 5);
        dummy.updateMatrix();

        mesh.current.setMatrixAt(i, dummy.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
      <>
        <Points ref={mesh} limit={particles.length}>
          <PointMaterial
            transparent
            color="#DA020E"
            size={0.003}
            sizeAttenuation={true}
            depthWrite={false}
          />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particles.length}
              array={new Float32Array(particles.length * 3)}
              itemSize={3}
            />
          </bufferGeometry>
        </Points>
      </>
    );
  }

  function FloatingOrb({ position, color }: { position: [number, number, number]; color: string }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state: any) => {
      if (!mesh.current) return;
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
      const time = state.clock.getElapsedTime();
      mesh.current.position.y = position[1] + Math.sin(time) * 0.5;
    });

    return (
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    );
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#DA020E" />
        <AnimatedParticles count={3000} />
        <FloatingOrb position={[-3, 2, 0]} color="#DA020E" />
        <FloatingOrb position={[3, -2, 0]} color="#FFD700" />
      </Canvas>
    </div>
  );
}
