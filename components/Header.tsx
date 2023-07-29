"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-3 py-5 bg-slate-700 shadow-sm bg-opacity-10">
      <p>Snippets</p>
      <ul className="flex w-full justify-end mr-20">
        <li className="mx-5">Signin</li>
        <li>Register</li>
      </ul>
      <CgMenuRight
        onClick={() => setOpen((prev) => !prev)}
        className="text-white text-xl cursor-pointer"
      />
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-[-50px] right-10 left-10 bg-gradient-to-tr from-black to-purple-900 bottom-10 rounded-b-md shadow-sm z-10"
          >
            <ul></ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
