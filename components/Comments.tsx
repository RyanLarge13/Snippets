"use client";

import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { BiUpload } from "react-icons/bi";

type Props = {
  comments:
    | { id: string; userId: string; snippetId: string; comment: string }[]
    | number;
};

const Comments = async ({ comments }: Props) => {
  const [show, setShow] = useState(false);
  const [newSnippetText, setNewSnippetText] = useState("");

  const submitNewComment = () => {
    const newComment = {};
  };

  return (
    <div className="mt-3 bg-slate-700 rounded-sm p-3">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="text-lg rounded-sm bg-slate-900 shadow-lg"
      >
        <MdExpandMore />
      </button>
      {!!show && (
        <div>
          <div className="flex justify-between items-start mt-2">
            <input
              type="text"
              value={newSnippetText}
              placeholder="New Comment"
              onChange={(e) => setNewSnippetText(e.target.value)}
              className="bg-slate-900 rounded-sm shadow-lg p-3 focus:outline-none"
            />
            <button
              onClick={() => submitNewComment()}
              className="bg-slate-900 rounded-sm shadow-l p-1"
            >
              <BiUpload />
            </button>
          </div>
          <div>
            {Array.isArray(comments) &&
              comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment.comment}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
