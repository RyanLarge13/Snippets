"use client";

import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { useRouter } from "next/navigation";

const DeleteUpdateSnip = ({ snipId }: { snipId: string }) => {
  const router = useRouter();

  const deleteSnip = async () => {
    try {
      const res = await fetch(`/api/snip/delete/${snipId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log(res);
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateSnip = () => {};

  return (
    <div className="flex justify-center items-center gap-x-3">
      <button onClick={() => updateSnip()}>
        <BiSolidMessageSquareEdit className="text-lg text-green-200" />
      </button>
      <button onClick={() => deleteSnip()}>
        <BsFillTrashFill className="text-red-300" />
      </button>
    </div>
  );
};

export default DeleteUpdateSnip;
