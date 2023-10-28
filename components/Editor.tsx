"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import CodeMirror from "@uiw/react-codemirror";
import SnippetClient from "./SnippetClient";
import { javascript } from "@codemirror/lang-javascript";
import { monokai } from "@uiw/codemirror-theme-monokai";
import { cpp } from "@codemirror/lang-cpp";

type Lang = {
  language: string;
  title: string;
  summary: string;
};

const Editor = ({ language, title, summary }: Lang) => {
  const { userId } = useAuth();
  const { user } = useUser();

  const [value, setValue] = useState(
    'console.log("Let us create a new Snip!");'
  );
  const [showCompleteSnip, setShowCompleteSnip] = useState(false);

  const router = useRouter();

  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  const createSnip = async () => {
    try {
      const res = await fetch("/api/snip/new", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          title: title,
          summary: summary,
          language: language,
          code: value,
        }),
      });
      if (res.ok) {
        router.push("/snipz");
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Finished");
    }
  };

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
        onClick={() =>
          !!showCompleteSnip
            ? setShowCompleteSnip(false)
            : setShowCompleteSnip(true)
        }
      >
        {!!showCompleteSnip ? "Close Preview" : "Preview Your Snippet"}
      </button>
      {showCompleteSnip && (
        <div>
          <SnippetClient
            text={value}
            language={language}
            user={`${user.firstName}${user.lastName}`}
          />
        </div>
      )}
      <button
        onClick={() => createSnip()}
        className="bg-slate-700 py-5 mt-5 rounded-sm shadow-lg font-semibold w-full"
      >
        Save
      </button>
    </div>
  );
};
export default Editor;
