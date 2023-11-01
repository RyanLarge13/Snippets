"use client";

import { AiOutlineStar } from "react-icons/ai";

type Info = {
  userId: string;
  snipId: string | Boolean;
};

const FavoriteSnip = ({ userId, snipId }: Info) => {
  const favSnip = async () => {
    try {
      const res = await fetch(`/api/snip/fav/${userId}/${snipId}`, {
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
    <button onClick={() => snipId && favSnip()}>
      <AiOutlineStar />
    </button>
  );
};

export default FavoriteSnip;
