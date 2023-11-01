"use client";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

type Comment = {
  commentId: string;
};

const DeleteComment = ({ commentId }: Comment) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const deleteComment = async () => {
    try {
      const res = await fetch(`/api/comment/delete/${commentId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      } else {
        console.log("Failed response");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>
        <MdKeyboardArrowDown />
      </button>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-2 right-0 text-black"
        >
          <button
            className="px-2 py-1 rounded-sm bg-red-200 shadow-md"
            onClick={() => deleteComment()}
          >
            Delete
          </button>
        </motion.div>
      )}
    </>
  );
};

export default DeleteComment;
