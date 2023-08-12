"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const [signin, setSignIn] = useState(false);

  return (
    <header className="flex justify-between items-center px-3 py-5 bg-slate-700 shadow-sm bg-opacity-10">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
        />
      <ul className="flex justify-end items-center">
        <li className="mx-1">
          <button
            className={`${
              signin ? "shadow-sm shadow-white" : "shadow-md"
            } rounded-full bg-black py-1 px-3 bg-opacity-30`}
            onClick={() => {
              setRegister(false);
              setOpen(false);
              setSignIn((prev) => !prev);
            }}
          >
            Signin
          </button>
        </li>
        <li>
          <button
            className={`${
              register ? "shadow-white shadow-sm" : "shadow-md"
            } rounded-full py-1 px-3 bg-black bg-opacity-30 mr-5`}
            onClick={() => {
              open && setOpen(false);
              signin && setSignIn(false);
              setRegister((prev) => !prev);
            }}
          >
            Register
          </button>
        </li>
        <li>
          <CgMenuRight
            onClick={() => {
              register && setRegister(false);
              signin && setSignIn(false);
              setOpen((prev) => !prev);
            }}
            className="text-white text-xl cursor-pointer"
          />
        </li>
      </ul>
      {open && (
        <AnimatePresence>
          <motion.nav
            initial={{ top: "110%" }}
            exit={{ top: "110%" }}
            animate={{
              top: "25vh",
              transition: { type: "spring", stiffness: 50 },
            }}
            className="fixed top-[-50px] right-10 left-10 bg-gradient-to-tr from-black to-purple-900 bottom-10 rounded-b-md shadow-sm z-10 overflow-y-auto"
          >
            <ul></ul>
          </motion.nav>
        </AnimatePresence>
      )}
      {register && (
        <AnimatePresence>
          <motion.div
            initial={{ top: "110%" }}
            exit={{ top: "110%" }}
            animate={{
              top: "25vh",
              transition: { type: "spring", stiffness: 50 },
            }}
            className="fixed top-[-50px] right-10 left-10 bg-gradient-to-tr from-black to-purple-900 bottom-10 rounded-md shadow-sm z-10 p-3 overflow-y-auto"
          >
            <h2>Register for a new account</h2>
            <form className="bg-black bg-opacity-30 rounded-md shadow-md p-3 mt-10 mb-5 text-white">
              <input
                className="p-3 rounded-md shadow-md bg-white bg-opacity-40 w-full"
                placeholder="Email"
              />
              <input
                className="p-3 my-5 rounded-md shadow-md bg-white bg-opacity-40 w-full"
                placeholder="Username"
              />
              <input
                className="p-3 rounded-md shadow-md bg-white bg-opacity-40 w-full"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-black bg-opacity-30 rounded-md shadow-md mt-3 px-3 py-1"
              >
                Register
              </button>
            </form>
            <hr />
            <p className="mt-2 text-center">or</p>
          </motion.div>
        </AnimatePresence>
      )}
      {signin && (
        <AnimatePresence>
          <motion.div
            initial={{ top: "110%" }}
            exit={{ top: "110%" }}
            animate={{
              top: "25vh",
              transition: { type: "spring", stiffness: 50 },
            }}
            className="fixed top-[-50px] right-10 left-10 bg-gradient-to-tr from-black to-purple-900 bottom-10 rounded-md shadow-sm z-10 p-3"
          >
            <h2>Signup and join the community</h2>
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
