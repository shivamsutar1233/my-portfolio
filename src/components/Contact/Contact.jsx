import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Contact = ({ setShow }) => {
  return (
    <section className=" w-full p-10">
      <section className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/shivam-sutar-6a1b49170"
          className="text-lg p-2 flex items-center gap-2"
          target="_blank"
        >
          <FaLinkedinIn />
          <p>in/shivam-sutar-6a1b49170</p>
        </a>
        <a
          href="https://github.com/shivamsutar1233/"
          className="text-lg p-2 flex items-center gap-2"
          target="_blank"
        >
          <FaGithub />
          <p>github.com/shivamsutar1233</p>
        </a>
      </section>
      <section className="p-2">
        <button
          className="border p-2 !rounded-full flex items-center justify-center cursor-pointer bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
          onClick={() => setShow(true)}
        >
          Get in Touch
        </button>
      </section>
    </section>
  );
};

export default Contact;
