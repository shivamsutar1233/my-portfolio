import { MdOutlineOpenInNew, MdVerified } from "react-icons/md";
import { cardClass } from "@/lib/styles";
import { certifications } from "./certificationsData";

const Certifications = () => {
  return (
    <div className="mx-auto mt-6 max-w-3xl">
      <h3 className="mb-3 text-lg font-semibold tracking-tight">
        Certifications
      </h3>
      <div className="flex flex-col gap-3">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 p-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${cardClass}`}
            aria-label={`Verify ${cert.title} credential from ${cert.issuer} (opens in a new tab)`}
          >
            <MdVerified
              aria-hidden="true"
              className="shrink-0 text-2xl text-cyan-700 dark:text-cyan-400"
            />
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="font-semibold text-black dark:text-white">
                {cert.title}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {cert.issuer}
              </span>
            </div>
            <MdOutlineOpenInNew
              aria-hidden="true"
              className="shrink-0 text-lg text-gray-400 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-cyan-700 dark:text-gray-500 dark:group-hover:text-cyan-400"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
