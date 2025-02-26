import { CodeBlock } from "react-code-block";
import { code } from "./constantData";
import { themes } from "prism-react-renderer";

const About = ({ theme }) => {
  return (
    <section className=" w-full sm:p-10 py-10">
      {" "}
      <CodeBlock
        code={code}
        language={"js"}
        theme={theme === "dark" ? themes.vsDark : themes.vsLight}
      >
        <CodeBlock.Code className="shadow-lg p-2 overflow-y-auto">
          <div className="table-row">
            <CodeBlock.LineNumber className="table-cell pr-10 text-sm text-right select-none" />
            <CodeBlock.LineContent>
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>
      </CodeBlock>
    </section>
  );
};

export default About;
