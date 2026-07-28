"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { loadMineralMoonCanvas } from "./mineralTexture";

type MoonSphereProps = {
  onActivate: () => void;
};

// Official Three.js example asset (MIT-licensed, mrdoob/three.js repo),
// re-graded into a "mineral moon" — see mineralTexture.ts.
const TEXTURE_PATH = "/greet/moon-1024.jpg";

function useMineralMoonTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let cancelled = false;
    let created: THREE.CanvasTexture | null = null;

    loadMineralMoonCanvas(TEXTURE_PATH).then((canvas) => {
      if (cancelled) return;
      created = new THREE.CanvasTexture(canvas);
      created.colorSpace = THREE.SRGBColorSpace;
      created.anisotropy = 4;
      created.needsUpdate = true;
      setTexture(created);
    });

    return () => {
      cancelled = true;
      created?.dispose();
    };
  }, []);

  return texture;
}

function MoonSphere({ onActivate }: MoonSphereProps) {
  const texture = useMineralMoonTexture();
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

  if (!texture) return null;

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
      // Sphere radius is 1; at fov 40 the visible half-height at distance d
      // is tan(20deg)*d, which must exceed the radius or the sphere clips
      // against the canvas edges. 3.15 fills ~85% of the frame with margin.
      camera={{ position: [0, 0, 3.15], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{ cursor: "grab", touchAction: "none" }}
    >
      {/* Kept close to neutral white — a tinted light would wash out the
          mineral-moon color variation baked into the texture itself. */}
      <ambientLight intensity={0.55} />
      <directionalLight position={[-3, 1.6, 4]} intensity={2.1} />
      <MoonSphere onActivate={onActivate} />
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
