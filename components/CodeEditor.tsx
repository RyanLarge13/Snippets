"use client";

import { useEffect, useRef, useState } from "react";
import Snippet from "./Snippet";

const CodeEditor = () => {
  const [textareaValue, setTextareaValue] = useState(""); // Initialize with an empty string

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div>
      <textarea
        className="bg-slate-700 p-3 mt-5 rounded-sm shadow-lg outline-none focus:outline-none w-full min-h-[300px]"
        onChange={handleTextareaChange}
        autocapitalize="none"
        value={textareaValue}
      ></textarea>
      {textareaValue && (
        <div>
          <Snippet
            text={textareaValue}
            language="javascript"
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
