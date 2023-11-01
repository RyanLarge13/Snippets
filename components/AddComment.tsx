"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AddComment = ({ snippetId }: { snippetId: string }) => {
  const { userId } = useAuth();

  const router = useRouter();

  const [showInput, setShowInput] = useState(false);
  const [comment, setComment] = useState("");

  const AddComment = async (e) => {
    e.preventDefault();
    const newComment = {
      comment,
      userId,
      snippetId,
    };
    try {
      const res = await fetch(`/api/snip/comment`, {
        method: "POST",
        body: JSON.stringify(newComment),
      });
      if (res.ok) {
        setShowInput(false);
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-3">
      <button
        onClick={() => setShowInput((prev) => !prev)}
        className={`${
          !showInput ? "bg-gray-900 text-white" : "bg-red-300 text-black"
        } py-1 px-4 rounded-sm shadow-lg`}
      >
        {showInput ? "Close" : "Comment"}
      </button>
      {showInput && (
        <form onSubmit={(e) => AddComment(e)}>
          <input
            placeholder="New Comment"
            onChange={(e) => setComment(e.target.value)}
            className="bg-slate-900 rounded-sm shadow-lg p-3 focus:outline-none w-full mt-3"
          />
          <button
            type="submit"
            className="bg-gray-900 py-1 px-4 rounded-sm shadow-lg text-white mt-3"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddComment;
