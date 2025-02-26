const StyledLink = ({ title, onClick }) => {
  return (
    <a
      className="p-2 lg:text-lg md:text-md sm:text-sm text-xs hover:text-cyan-800 dark:hover:text-cyan-400"
      href={`#${title}`}
      onClick={() => onClick(false)}
    >
      {"<" + title + "/>"}
    </a>
  );
};

export default StyledLink;
