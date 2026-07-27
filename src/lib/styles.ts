/**
 * Shared class strings so every button/link across the site shares one
 * consistent, deliberate interaction language (invert-on-hover, soft lift,
 * matching focus ring) instead of each component reinventing it slightly
 * differently.
 */

export const primaryButtonClass =
  "inline-flex cursor-pointer items-center justify-center gap-2 !rounded-full border border-black/10 bg-black px-5 py-2 font-medium text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-sm dark:border-white/15 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600";

export const secondaryButtonClass =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg dark:border-white/15 dark:hover:bg-white dark:hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600";

export const iconButtonClass =
  "cursor-pointer rounded-full border border-black/10 p-2 transition-all duration-300 ease-out hover:bg-black hover:text-white dark:border-white/15 dark:hover:bg-white dark:hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600";

export const cardClass =
  "rounded-2xl border border-black/[0.06] bg-black/[0.015] shadow-sm dark:border-white/[0.08] dark:bg-white/[0.02]";

export const inputClass =
  "rounded-lg border border-black/10 bg-transparent p-2 transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-cyan-600 disabled:opacity-60 dark:border-white/15";

export const sectionHeadingClass =
  "text-2xl md:text-3xl font-bold tracking-tight mb-4";

export const iconChipClass =
  "flex items-center justify-center rounded-xl border border-black/10 bg-black/[0.015] shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md dark:border-white/15 dark:bg-white/[0.02]";
