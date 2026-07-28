"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import styles from "./greet.module.css";

type Spot = { x: number; y: number; r: number; depth: number };
type Spark = { id: number; x: number; dx: number; delay: number };

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Positions are in unit-circle space (-1..1) so the moon's "face" stays
// put across resizes instead of re-rolling every time the canvas repaints.
function scatter(count: number, maxDist: number, radius: [number, number]): Spot[] {
  const spots: Spot[] = [];
  for (let i = 0; i < count; i++) {
    let x = 0;
    let y = 0;
    let dist = 1;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      dist = Math.hypot(x, y);
    } while (dist > maxDist);
    spots.push({
      x,
      y,
      r: radius[0] + Math.random() * (radius[1] - radius[0]),
      depth: 0.4 + Math.random() * 0.6,
    });
  }
  return spots;
}

const Moon = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sparkId = useRef(0);
  const craters = useMemo(() => scatter(26, 0.82, [0.035, 0.14]), []);
  const maria = useMemo(() => scatter(5, 0.65, [0.16, 0.36]), []);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setHintVisible(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const draw = () => {
      const size = canvas.clientWidth;
      if (!size) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const r = size / 2;

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();

      // Lit-sphere base: light source upper-left, like a real moon photo.
      const base = ctx.createRadialGradient(
        cx - r * 0.32,
        cy - r * 0.36,
        r * 0.05,
        cx,
        cy,
        r * 1.05
      );
      base.addColorStop(0, "#fffaf0");
      base.addColorStop(0.35, "#f3e6c4");
      base.addColorStop(0.68, "#dcc596");
      base.addColorStop(1, "#a98f66");
      ctx.fillStyle = base;
      ctx.fillRect(0, 0, size, size);

      // Maria — the dark "seas", soft irregular low-contrast patches.
      maria.forEach((m) => {
        const mx = cx + m.x * r;
        const my = cy + m.y * r;
        const mr = m.r * r;
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, mr);
        g.addColorStop(0, `rgba(60,44,26,${0.22 * m.depth})`);
        g.addColorStop(1, "rgba(60,44,26,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mx, my, mr, 0, Math.PI * 2);
        ctx.fill();
      });

      // Craters — shadowed floor (down-light side) + a rim catching light.
      craters.forEach((c) => {
        const px = cx + c.x * r;
        const py = cy + c.y * r;
        const pr = c.r * r;

        const shadow = ctx.createRadialGradient(
          px + pr * 0.15,
          py + pr * 0.15,
          pr * 0.1,
          px,
          py,
          pr
        );
        shadow.addColorStop(0, `rgba(30,20,10,${0.4 * c.depth})`);
        shadow.addColorStop(1, "rgba(30,20,10,0)");
        ctx.fillStyle = shadow;
        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px - pr * 0.22, py - pr * 0.22, pr * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,250,235,${0.24 * c.depth})`;
        ctx.fill();
      });

      // Terminator — gentle overall darkening toward the lower-right limb.
      const term = ctx.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
      term.addColorStop(0, "rgba(35,20,10,0)");
      term.addColorStop(0.6, "rgba(35,20,10,0)");
      term.addColorStop(1, "rgba(35,20,10,0.32)");
      ctx.fillStyle = term;
      ctx.fillRect(0, 0, size, size);

      ctx.restore();
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [craters, maria]);

  const handlePointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -14, y: px * 14 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const handleActivate = () => {
    setHintVisible(false);
    if (prefersReducedMotion()) return;

    const width = stageRef.current?.clientWidth ?? 160;
    const burst: Spark[] = Array.from({ length: 10 }, () => {
      sparkId.current += 1;
      return {
        id: sparkId.current,
        x: width / 2 + (Math.random() - 0.5) * width * 0.5,
        dx: (Math.random() - 0.5) * 70,
        delay: Math.random() * 0.12,
      };
    });
    setSparks((prev) => [...prev, ...burst]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !burst.includes(s)));
    }, 1700);
  };

  return (
    <div className={styles.moonStage} ref={stageRef}>
      <button
        type="button"
        className={styles.moonButton}
        style={
          {
            transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          } as CSSProperties
        }
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        onClick={handleActivate}
        aria-label="Tap the moon for a blessing"
      >
        <span className={styles.moonGlow} aria-hidden="true"></span>
        <canvas ref={canvasRef} className={styles.moonCanvas} aria-hidden="true"></canvas>
        {sparks.map((s) => (
          <span
            key={s.id}
            className={styles.spark}
            style={
              {
                left: s.x,
                animationDelay: `${s.delay}s`,
                "--dx": `${s.dx}px`,
              } as CSSProperties
            }
          ></span>
        ))}
      </button>
      <p
        className={`${styles.moonHint} ${hintVisible ? "" : styles.moonHintHidden}`}
        aria-hidden="true"
      >
        tap the moon
      </p>
    </div>
  );
};

export default Moon;
