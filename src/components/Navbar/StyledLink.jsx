const StyledLink = ({ title }) => {
  return (
    <a
      className="p-2 hover:text-cyan-800 dark:hover:text-cyan-400"
      href={`#${title}`}
    >
      {"<" + title + "/>"}
    </a>
  );
};

export default StyledLink;
