"use client";

import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import Snippet from "./Snippet";
import { StreamLanguage } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript";
import { monokai } from "@uiw/codemirror-theme-monokai";
import { cpp } from "@codemirror/lang-cpp";

type Lang = {
  language: string;
};

const Editor = ({ language }: Lang) => {
  const [value, setValue] = useState("console.log('hello world!');");
  const [showCompleteSnip, setShowCompleteSnip] = useState(false);

  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  return (
    <div className="overflow-hidden rounded-mlsm shadow-lg mt-10">
      <CodeMirror
        value={value}
        height="200px"
        extensions={[javascript({ jsx: true }), cpp()]}
        theme={monokai}
        onChange={onChange}
      />
      <button
        className="py-2 px-4 rounded-sm shadow-lg bg-slate-900 mt-3"
        type="button"
        onClick={() => !!showCompleteSnip ? setShowCompleteSnip(false) : setShowCompleteSnip(true)}
      >
        {!!showCompleteSnip ? 
        "Close Preview" :
        "Preview Your Snippet"}
      </button>
      {showCompleteSnip && (
        <div>
          <Snippet text={value} language={language} user="RyanLarge13" />
        </div>
      )}
      <button className="bg-slate-700 py-5 mt-5 rounded-sm shadow-lg font-semibold w-full">
        Save
      </button>
    </div>
  );
};
export default Editor;
