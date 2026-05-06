'use client'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera, Environment, ContactShadows, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function Church3DModel() {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Main Church Building */}
        <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 3, 4]} />
          <meshStandardMaterial
            color={hovered ? '#d4af37' : '#c9a227'}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>

        {/* Church Roof */}
        <mesh position={[0, 3.5, 0]} castShadow>
          <coneGeometry args={[2.5, 2, 4]} />
          <meshStandardMaterial
            color="#8B4513"
            metalness={0.2}
            roughness={0.8}
          />
        </mesh>

        {/* Main Tower */}
        <mesh position={[0, 5, 1.5]} castShadow>
          <boxGeometry args={[1, 3, 1]} />
          <meshStandardMaterial
            color={hovered ? '#d4af37' : '#c9a227'}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>

        {/* Tower Roof */}
        <mesh position={[0, 7, 1.5]} castShadow>
          <coneGeometry args={[0.8, 1.5, 4]} />
          <meshStandardMaterial
            color="#8B4513"
            metalness={0.2}
            roughness={0.8}
          />
        </mesh>

        {/* Cross on Tower */}
        <group position={[0, 7.8, 1.5]}>
          <mesh castShadow>
            <boxGeometry args={[0.1, 0.8, 0.1]} />
            <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.3, 0]} castShadow>
            <boxGeometry args={[0.4, 0.1, 0.1]} />
            <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>

        {/* Main Door */}
        <mesh position={[0, 0.5, 2.01]} castShadow>
          <boxGeometry args={[0.8, 1.5, 0.1]} />
          <meshStandardMaterial color="#4a3728" metalness={0.4} roughness={0.6} />
        </mesh>

        {/* Windows */}
        {[
          [-0.8, 2, 2.01],
          [0.8, 2, 2.01],
          [-0.8, 2, -2.01],
          [0.8, 2, -2.01],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]} castShadow>
            <boxGeometry args={[0.4, 0.6, 0.05]} />
            <meshStandardMaterial
              color="#87CEEB"
              metalness={0.9}
              roughness={0.1}
              emissive="#87CEEB"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}

        {/* Side Wings */}
        <mesh position={[-2, 1, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 2, 3]} />
          <meshStandardMaterial
            color={hovered ? '#d4af37' : '#c9a227'}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>

        <mesh position={[2, 1, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 2, 3]} />
          <meshStandardMaterial
            color={hovered ? '#d4af37' : '#c9a227'}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>

        {/* Side Wing Roofs */}
        <mesh position={[-2, 2.5, 0]} castShadow>
          <coneGeometry args={[1.2, 1, 4]} />
          <meshStandardMaterial color="#8B4513" metalness={0.2} roughness={0.8} />
        </mesh>

        <mesh position={[2, 2.5, 0]} castShadow>
          <coneGeometry args={[1.2, 1, 4]} />
          <meshStandardMaterial color="#8B4513" metalness={0.2} roughness={0.8} />
        </mesh>

        {/* Steps */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, i * 0.15, 2.3 + i * 0.3]} castShadow receiveShadow>
            <boxGeometry args={[1.2 + i * 0.2, 0.15, 0.3]} />
            <meshStandardMaterial color="#696969" metalness={0.3} roughness={0.7} />
          </mesh>
        ))}

        {/* Decorative Elements */}
        <mesh position={[0, 1, 2.01]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

function Church3DScene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 4, 8]} fov={50} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#d4af37" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#d4af37" />
        <Church3DModel />
        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={10}
        />
      </Canvas>
    </div>
  )
}

export function Church3D() {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-3xl blur-3xl animate-pulse-glow" />
      <div className="relative glass rounded-3xl p-2 h-full">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 h-full">
          <Church3DScene />
        </div>
      </div>
    </div>
  )
}
