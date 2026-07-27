type NavigationLineProps = {
  title: string;
};

const NavigationLine = ({ title }: NavigationLineProps) => {
  // Purely decorative — each section provides its own accessible heading,
  // so this floating badge is hidden from assistive tech to avoid the
  // section title being announced twice.
  return (
    <section
      aria-hidden="true"
      className={`h-full border border-black/10 dark:border-white/15  w-0 absolute lg:left-48 md:left-28 sm:left-20 left-10 top-10 before:absolute  before:content-[''] before:z-10 before:bg-black before:text-white dark:before:bg-white dark:before:text-black before:text-xs before:rounded-full before:size-2 before:ring-4 before:ring-white dark:before:ring-black before:-left-1 before:-top-1 `}
    >
      <section className="absolute -top-4 left-2 bg-black text-white dark:bg-white dark:text-black py-1 px-2.5 text-[0.65rem] font-semibold tracking-wide uppercase rounded-full shadow-sm">
        {title}
      </section>
    </section>
  );
};

export default NavigationLine;
