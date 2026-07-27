"use client";

import { useRef, useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";
import { iconChipClass, primaryButtonClass, sectionHeadingClass } from "@/lib/styles";
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
      <h2 id="contact-heading" className={sectionHeadingClass}>
        Contact
      </h2>
      <section className="flex flex-wrap gap-3">
        <a
          href={siteConfig.linkedin}
          className={`gap-2 px-4 py-2.5 text-sm font-medium hover:text-cyan-700 dark:hover:text-cyan-400 ${iconChipClass}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shivam Sutar on LinkedIn (opens in a new tab)"
        >
          <FaLinkedinIn aria-hidden="true" className="text-lg" />
          <span className="hidden sm:inline">in/shivam-sutar-6a1b49170</span>
        </a>
        <a
          href={siteConfig.github}
          className={`gap-2 px-4 py-2.5 text-sm font-medium hover:text-cyan-700 dark:hover:text-cyan-400 ${iconChipClass}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shivam Sutar on GitHub (opens in a new tab)"
        >
          <FaGithub aria-hidden="true" className="text-lg" />
          <span className="hidden sm:inline">github.com/shivamsutar1233</span>
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
