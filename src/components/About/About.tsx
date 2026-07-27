"use client";

import { CodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import { code } from "./constantData";
import { useTheme } from "@/context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  return (
    <section
      className=" w-full sm:p-10 py-10"
      aria-label="About Shivam Sutar, presented as a JavaScript class"
    >
      <h2 id="about-heading" className="sr-only">
        About
      </h2>
      <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-black/10 shadow-xl dark:border-white/10">
        <div className="flex items-center gap-2 border-b border-black/10 bg-black/[0.03] px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <span aria-hidden="true" className="size-3 rounded-full bg-red-400" />
          <span
            aria-hidden="true"
            className="size-3 rounded-full bg-yellow-400"
          />
          <span
            aria-hidden="true"
            className="size-3 rounded-full bg-green-400"
          />
          <span className="ml-2 font-mono text-xs text-gray-500 dark:text-gray-400">
            shivam-sutar.js
          </span>
        </div>
        <CodeBlock
          code={code}
          language={"js"}
          theme={theme === "dark" ? themes.vsDark : themes.vsLight}
        >
          <CodeBlock.Code className="max-h-[32rem] overflow-y-auto p-4 font-mono">
            <div className="table-row">
              <CodeBlock.LineNumber className="table-cell pr-10 text-sm text-right select-none" />
              <CodeBlock.LineContent>
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          </CodeBlock.Code>
        </CodeBlock>
      </div>
    </section>
  );
};

export default About;
