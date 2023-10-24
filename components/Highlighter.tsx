"use client";

import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// all-languages.js
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
// Import other languages as needed

type HighlighterProps = {
  code: string;
  language: string;
};

const Highlighter = ({ code, language }: HighlighterProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="rounded-md">
      <code className={`language-${language}`}>{code}</code>
      <p className="mt-5">// {language}</p>
    </pre>
  );
};

export default Highlighter;
