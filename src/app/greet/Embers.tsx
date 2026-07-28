"use client";

import { useEffect, useRef } from "react";
import styles from "./greet.module.css";

type Particle = {
  x: number;
  y: number;
  r: number;
  speed: number;
  phase: number;
  hue: string;
  alpha: number;
};

/**
 * Ambient rising embers behind the whole page. Positioned absolute (not
 * fixed) and sized to the full document height so the effect actually
 * scrolls through every section instead of being stuck to the hero.
 */
const Embers = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];
    let rafId = 0;
    let t = 0;

    const makeParticle = (): Particle => ({
      x: Math.random() * w,
      y: h + Math.random() * 60,
      r: 0.6 + Math.random() * 1.6,
      speed: 0.15 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.5 ? "246,197,113" : "226,135,47",
      alpha: 0.15 + Math.random() * 0.35,
    });

    const resize = () => {
      w = window.innerWidth;
      h = document.documentElement.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      const count = Math.min(60, Math.floor((w * h) / 45000));
      particles = Array.from({ length: count }, () => {
        const p = makeParticle();
        p.y = Math.random() * h;
        return p;
      });
    };

    const tick = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speed;
        const sway = Math.sin(t * 0.6 + p.phase) * 10;
        const flicker = 0.7 + 0.3 * Math.sin(t * 3 + p.phase * 4);
        if (p.y < -20) {
          particles[i] = makeParticle();
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x + sway, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},${(p.alpha * flicker).toFixed(3)})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    };

    init();
    window.addEventListener("resize", init);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.embers} aria-hidden="true" />;
};

export default Embers;
