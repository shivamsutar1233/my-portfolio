"use client";

import { useRef, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";
import { primaryButtonClass } from "@/lib/styles";
import Modal from "./Modal";

const Contact = () => {
  const [show, setShow] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setShow(false);
    triggerRef.current?.focus();
  };

  return (
    <section className=" w-full sm:p-10 py-10">
      <h2 id="contact-heading" className="sr-only">
        Contact
      </h2>
      <section className="flex flex-wrap gap-5">
        <a
          href={siteConfig.linkedin}
          className="flex items-center gap-2 rounded p-2 text-lg transition-colors hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:hover:text-cyan-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shivam Sutar on LinkedIn (opens in a new tab)"
        >
          <FaLinkedinIn aria-hidden="true" />
          <span className="hidden sm:block">in/shivam-sutar-6a1b49170</span>
        </a>
        <a
          href={siteConfig.github}
          className="flex items-center gap-2 rounded p-2 text-lg transition-colors hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:hover:text-cyan-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shivam Sutar on GitHub (opens in a new tab)"
        >
          <FaGithub aria-hidden="true" />
          <span className="hidden sm:block">github.com/shivamsutar1233</span>
        </a>
      </section>
      <section className="p-2">
        <button
          ref={triggerRef}
          className={primaryButtonClass}
          onClick={() => setShow(true)}
        >
          Get in Touch
        </button>
      </section>
      <Modal show={show} onClose={handleClose} />
    </section>
  );
};

export default Contact;
