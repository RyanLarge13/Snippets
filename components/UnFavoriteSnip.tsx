"use client";

import { AiFillStar } from "react-icons/ai";

const UnFavoriteSnip = ({ favId }: { favId: string }) => {
  const unFavSnip = async () => {
    console.log("being called");
    try {
      const res = await fetch(`/api/snip/unfav/${favId}`, {
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
    <button onClick={() => unFavSnip()}>
      <AiFillStar className="text-yellow-300" />
    </button>
  );
};

export default UnFavoriteSnip;
