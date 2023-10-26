"use client"

import { useRouter } from "next/navigation";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const Button = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="bg-gray-900 py-1 px-4 rounded-sm shadow-lg text-white"
      onClick={() => router.push("/create")}
    >
      <AiOutlineAppstoreAdd />
    </button>
  );
};

export default Button;
