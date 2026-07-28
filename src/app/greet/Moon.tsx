"use client";

import dynamic from "next/dynamic";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import styles from "./greet.module.css";

type Spark = { id: number; x: number; dx: number; delay: number };

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionServerSnapshot() {
  return false;
}

// WebGL needs a browser, so the 3D scene only ever loads client-side.
const MoonScene = dynamic(() => import("./MoonScene"), {
  ssr: false,
  loading: () => <span className={styles.moonLoading} aria-hidden="true" />,
});

const Moon = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const sparkId = useRef(0);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [hintVisible, setHintVisible] = useState(true);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    prefersReducedMotion,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    const timer = setTimeout(() => setHintVisible(false), 6000);
    return () => clearTimeout(timer);
  }, []);

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
      <div className={styles.moonWrap}>
        <span className={styles.moonGlow} aria-hidden="true"></span>
        <MoonScene onActivate={handleActivate} reducedMotion={reducedMotion} />
        {/* pointer-events: none so mouse/touch reach the canvas underneath
            for drag-to-rotate; keyboard users can still Tab + Enter here. */}
        <button
          type="button"
          className={styles.moonKeyTarget}
          onClick={handleActivate}
          aria-label="Bless with the moon"
        ></button>
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
      </div>
      <p
        className={`${styles.moonHint} ${hintVisible ? "" : styles.moonHintHidden}`}
        aria-hidden="true"
      >
        drag to turn the moon &middot; tap for a blessing
      </p>
    </div>
  );
};

export default Moon;
