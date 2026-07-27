"use client";

import { useEffect, useRef, useState } from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { secondaryButtonClass } from "@/lib/styles";

type ProjectEmbedProps = {
  src: string;
  title: string;
};

/**
 * Live-site iframes are heavy (each mounts a full external page). We only
 * mount the iframe once it's about to scroll into view, and skip it
 * entirely on small screens where a full embedded site isn't usable.
 */
const ProjectEmbed = ({ src, title }: ProjectEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Small screens: live embeds aren't usable, so link out instead */}
      <div className="sm:hidden flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-cyan-600/20 dark:border-cyan-400/20 p-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Live preview works best on larger screens.
        </p>
        <a href={src} target="_blank" rel="noopener noreferrer" className={secondaryButtonClass}>
          Open {title}
          <MdOutlineOpenInNew aria-hidden="true" />
        </a>
      </div>

      {/* sm and up: lazily-mounted live embed */}
      <div className="hidden sm:block relative h-[35rem] w-full overflow-hidden rounded-2xl border border-cyan-600/20 dark:border-cyan-400/20 shadow-lg">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gray-100 dark:bg-gray-900">
            <span
              aria-hidden="true"
              className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-600 border-t-transparent dark:border-cyan-400"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Loading {title} preview…
            </span>
          </div>
        )}
        {shouldLoad && (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`h-full w-full transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectEmbed;
