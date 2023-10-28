"use client";

import { useState } from "react";
import Editor from "../../components/Editor";

const Page = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="p-3 lg:px-40">
      <h1 className="text-5xl font-bold">
        Create
        <br /> Your Next Big Snipz
      </h1>
      <div className="mt-20 mb-10 px-5">
        <div className="lg:flex justify-between items-start mb-10 gap-x-20">
          <div className="w-full mb-5 lg:mb-0">
            <p className="text-2xl mb-3 font-semibold">
              Give your Snip A Title
            </p>
            <input
              type="text"
              className="bg-slate-900 rounded-sm shadow-lg p-3 focus:outline-none w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p className="text-2xl my-3 lg:mt-0 font-semibold">
              Give Your Snip A Description
            </p>
            <input
              type="text"
              className="bg-slate-900 rounded-sm shadow-lg p-3 focus:outline-none w-full"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>
        <p className="text-2xl mb-3 font-semibold">Pick Your Language</p>
        <select
          name="programming-language"
          className="px-4 py-2 rounded-sm shadow-lg bg-slate-700 focus:outline-none w-full"
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
        <Editor language={selectedLanguage} title={title} summary={summary} />
      </div>
    </div>
  );
};

export default Page;
