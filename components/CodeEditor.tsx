"use client";

import { useEffect, useRef, useState } from "react";
import Snippet from "./Snippet";

type Lang = {
	language: string
}

const CodeEditor = ({language}: Lang) => {
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div>
      <textarea
        className="bg-slate-700 p-3 mt-5 rounded-sm shadow-lg outline-none focus:outline-none w-full min-h-[300px]"
        onChange={(e) => setTextareaValue(e.target.value)}
        value={textareaValue}
      ></textarea>
      {textareaValue && (
        <div>
          <Snippet
            text={textareaValue}
            language={language}
            user="RyanLarge13"
          />
          <button className="bg-slate-700 py-5 mt-5 rounded-sm shadow-lg font-semibold w-full">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
