"use client";

import { AiFillStar } from "react-icons/ai";

type Info = {
  userId: string;
  snipId: string;
};

const LikeSnippet = ({ userId, snipId }: Info) => {
  const likeSnippet = async () => {
    console.log("being called");
    try {
      const res = await fetch(`/api/like/${userId}/${snipId}`, {
        method: "PATCH",
      });
      if (res.ok) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={() => likeSnippet()}>
      <AiFillStar />
    </button>
  );
};

export default LikeSnippet;
