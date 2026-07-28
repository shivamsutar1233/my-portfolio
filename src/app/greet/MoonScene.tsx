"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type MoonSphereProps = {
  onActivate: () => void;
};

// Official Three.js example asset (MIT-licensed, mrdoob/three.js repo) —
// a real lunar photo texture rather than a painted approximation.
const TEXTURE_PATH = "/greet/moon-1024.jpg";

function MoonSphere({ onActivate }: MoonSphereProps) {
  const texture = useLoader(THREE.TextureLoader, TEXTURE_PATH);

  // three.js textures are inherently mutable, imperative resources —
  // configuring one in place after load is the standard react-three-fiber
  // pattern, not a purity violation the react-hooks rule accounts for.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
  }, [texture]);

  const downPos = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    downPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    const start = downPos.current;
    downPos.current = null;
    // Only treat this as a "tap" (not the end of a drag-to-rotate) if the
    // pointer barely moved between down and up.
    if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) < 6) {
      onActivate();
    }
  };

  return (
    <mesh onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={1} metalness={0} />
    </mesh>
  );
}

type MoonSceneProps = {
  onActivate: () => void;
  reducedMotion: boolean;
};

const MoonScene = ({ onActivate, reducedMotion }: MoonSceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.6], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{ cursor: "grab", touchAction: "none" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[-3, 1.6, 4]} intensity={2} />
      <Suspense fallback={null}>
        <MoonSphere onActivate={onActivate} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.5}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 2 - 0.9}
        maxPolarAngle={Math.PI / 2 + 0.9}
      />
    </Canvas>
  );
};

export default MoonScene;
