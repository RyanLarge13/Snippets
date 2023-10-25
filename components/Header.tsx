"use client";

import { useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [menu, setMenu] = useState(false);

  return (
    <header className="flex justify-between items-center px-3 py-5 bg-slate-700 shadow-sm bg-opacity-10">
      <div onClick={() => setMenu((prev) => !prev)}>
        <p className="bg-gradient-to-tr from-fuchsia-500 to-pink-300 bg-clip-text text-transparent font-extrabold text-lg">
          Snipz
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <button
          className="bg-gray-900 py-1 px-4 rounded-sm shadow-lg text-white"
          onClick={() => router.push("/create")}
        >
          <AiOutlineAppstoreAdd />
        </button>
        <UserButton />
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            exit={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-20 left-3 bg-gray-700 rounded-md shadow-lg p-5"
          >
            {!userId && (
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
              </ul>
            )}
            {!!userId && (
              <ul className="flex flex-col gap-y-5">
                <li
                  className={`w-40 border-b border-b-gray-100 ${
                    pathname === "/" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link href="/" className="p-3">Home</Link>
                </li>
                <li
                  className={`w-40 border-b border-b-gray-100 ${
                    pathname === "/profile" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link href="/profile"     className="p-3">Profile</Link>
                </li>
                <li
                  className={`w-40 border-b border-b-gray-100 ${
                    pathname === "/snipz" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link href="/snipz"className="p-3">Snipz</Link>
                </li>
                <li
                  className={`w-40 border-b border-b-gray-100 ${
                    pathname === "/create" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link href="/create"className="p-3">Create</Link>
                </li>
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
