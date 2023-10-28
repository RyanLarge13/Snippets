"use client";

import { AiFillLike } from "react-icons/ai";

const UnLikeSnippet = ({ likeId }: { likeId: string }) => {
  const unLikeSnip = async () => {
    console.log("being called");
    try {
      const res = await fetch(`/api/snip/unlike/${likeId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={() => unLikeSnip()}>
      <AiFillLike />
    </button>
  );
};

export default UnLikeSnippet;
