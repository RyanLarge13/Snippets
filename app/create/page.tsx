"use client";

import { useState } from "react";
import CodeEditor from "../../components/CodeEditor";

const Page = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  return (
    <div className="p-3">
      <h1 className="text-5xl font-bold">
        Create
        <br /> Your Next Big Snipz
      </h1>
      <div className="mt-20 px-5">
        <p className="text-2xl mb-3 font-semibold">Pick Your Language</p>
        <select
          name="programming-language"
          className="w-48 px-4 py-2 rounded-sm shadow-lg bg-slate-700 focus:outline-none w-full"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="bash">Bash</option>
          <option value="jsx">JSX</option>
          <option value="tsx">TSX</option>
          <option value="typescript">TypeScript</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
          <option value="c">C</option>
          <option value="sql">SQL</option>
        </select>
        <CodeEditor language={selectedLanguage} />
      </div>
    </div>
  );
};

export default Page;
