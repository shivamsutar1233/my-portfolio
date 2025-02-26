const NavigationLine = ({ title }) => {
  return (
    <section
      className={`h-full border border-gray-300  w-0 absolute lg:left-48 md:left-28 sm:left-20 left-10 top-10 before:absolute  before:content-[''] before:z-10 before:bg-black before:text-white dark:before:bg-white dark:before:text-black before:text-xs  before:rounded-full before:p-1 before:-left-1 before:-top-2 `}
    >
      <section className=" absolute -top-4 left-2 bg-black text-white dark:bg-white dark:text-black  py-0.5 px-2 text-xs rounded-full">
        {title}
      </section>
    </section>
  );
};

export default NavigationLine;
