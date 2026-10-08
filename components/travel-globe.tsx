"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type * as THREE from "three";

function RotatingGlobe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={ref} rotation={[0.28, 0.1, -0.08]}>
      <icosahedronGeometry args={[2.15, 4]} />
      <meshStandardMaterial color="#c5a474" wireframe transparent opacity={0.42} />
    </mesh>
  );
}

export function TravelGlobe() {
  return (
    <div className="globe-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.8], fov: 45 }} dpr={[1, 1.35]}>
        <ambientLight intensity={1.4} />
        <pointLight position={[4, 3, 4]} intensity={18} color="#f5f0e7" />
        <RotatingGlobe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
    </div>
  );
}
