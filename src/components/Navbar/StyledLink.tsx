type StyledLinkProps = {
  title: string;
  onClick: (show: boolean) => void;
  isActive?: boolean;
};

const StyledLink = ({ title, onClick, isActive = false }: StyledLinkProps) => {
  return (
    <a
      className={`relative p-2 lg:text-lg md:text-md sm:text-sm text-xs transition-colors duration-300 hover:text-cyan-700 dark:hover:text-cyan-400 after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-cyan-600 after:transition-transform after:duration-300 dark:after:bg-cyan-400 hover:after:scale-x-100 ${
        isActive
          ? "text-cyan-700 dark:text-cyan-400 after:scale-x-100"
          : ""
      }`}
      href={`#${title}`}
      aria-current={isActive ? "true" : undefined}
      onClick={() => onClick(false)}
    >
      {"<" + title + "/>"}
    </a>
  );
};

export default StyledLink;
