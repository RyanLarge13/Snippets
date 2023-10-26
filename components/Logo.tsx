"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import {
  AiOutlineAppstoreAdd,
  AiFillHome,
  AiFillProfile,
} from "react-icons/ai";
import { BsFilePost } from "react-icons/bs";

const Logo = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  const [menu, setMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setMenu((prev) => !prev)}
        className="bg-gradient-to-tr from-fuchsia-500 to-pink-300 bg-clip-text text-transparent font-extrabold text-lg"
      >
        Snipz
      </button>{" "}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            exit={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-20 left-3 bg-gray-900 rounded-md shadow-lg p-5 w-60 z-10"
          >
            {!userId && (
              <ul className="flex flex-col gap-y-5">
                <li
                  className={`border-b border-b-gray-100 ${
                    pathname === "/" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link
                    href="/"
                    className="p-3 flex justify-between items-center"
                    onClick={() => setMenu(false)}
                  >
                    <p>Home</p>
                    <AiFillHome />
                  </Link>
                </li>
                <li
                  className={`border-b border-b-gray-100 ${
                    pathname === "/snipz" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link
                    href="/snipz"
                    className="p-3 flex justify-between items-center"
                    onClick={() => setMenu(false)}
                  >
                    <p>Snipz</p>
                    <BsFilePost />
                  </Link>
                </li>
              </ul>
            )}
            {!!userId && (
              <ul className="flex flex-col gap-y-5">
                <li
                  className={`border-b border-b-gray-100 ${
                    pathname === "/" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link
                    href="/"
                    className="p-3 flex justify-between items-center"
                    onClick={() => setMenu(false)}
                  >
                    <p>Home</p>
                    <AiFillHome />
                  </Link>
                </li>
                <li
                  className={`border-b border-b-gray-100 ${
                    pathname === "/profile" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link
                    href="/profile"
                    className="p-3 flex justify-between items-center"
                    onClick={() => setMenu(false)}
                  >
                    <p>Profile</p>
                    <AiFillProfile />
                  </Link>
                </li>
                <li
                  className={`border-b border-b-gray-100 ${
                    pathname === "/snipz" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link
                    href="/snipz"
                    className="p-3 flex justify-between items-center"
                    onClick={() => setMenu(false)}
                  >
                    <p>Snipz</p>
                    <BsFilePost />
                  </Link>
                </li>
                <li
                  className={`border-b border-b-gray-100 ${
                    pathname === "/create" ? "text-fuchsia-300" : "text-white"
                  }`}
                >
                  <Link
                    href="/create"
                    className="p-3 flex justify-between items-center"
                    onClick={() => setMenu(false)}
                  >
                    <p>Create</p>
                    <AiOutlineAppstoreAdd />
                  </Link>
                </li>
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Logo;
