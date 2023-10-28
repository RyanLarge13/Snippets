"use client";

import { AiOutlineLike } from "react-icons/ai";

type Info = {
  userId: string;
  snipId: string | Boolean;
};

const LikeSnippet = ({ userId, snipId }: Info) => {
  const likeSnip = async () => {
    console.log("being called");
    try {
      const res = await fetch(`/api/snip/like/${userId}/${snipId}`, {
        method: "POST",
      });
      if (res.ok) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={() => snipId && likeSnip()}>
      <AiOutlineLike />
    </button>
  );
};

export default LikeSnippet;
