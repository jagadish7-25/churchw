"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function RotatingChurch() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load the texture from the public folder
  const texture = useTexture("/church-image.png");
  
  // Create geometry dynamically based on image aspect ratio
  // Assuming a generic landscape or square if we don't know the exact ratio
  // A plane that's 5x5 units should be large enough
  const geometry = useMemo(() => new THREE.PlaneGeometry(5, 5), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate 360 degrees slowly
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial 
        map={texture} 
        transparent={true} 
        side={THREE.DoubleSide} 
        alphaTest={0.1}
      />
    </mesh>
  );
}

export default function Church3D() {
  return (
    <div className="w-full h-[50vh] md:h-[70vh] flex items-center justify-center relative z-10 animate-blur-fade-up pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: "transparent" }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingChurch />
      </Canvas>
    </div>
  );
}
