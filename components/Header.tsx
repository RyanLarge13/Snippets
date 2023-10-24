"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, getProviders, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<string, unknown> | null>(null);
  const [signin, setSignIn] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <header className="flex justify-between items-center px-3 py-5 bg-slate-700 shadow-sm bg-opacity-10">
      <p className="bg-gradient-to-tr from-fuchsia-500 to-pink-300 bg-clip-text text-transparent font-extrabold text-lg">
        Snipz
      </p>
      {session?.user ? (
        <Image
          src={session?.user.image}
          width={35}
          height={35}
          className="rounded-full"
          alt="user"
        />
      ) : (
        <button
          className={`${
            signin ? "shadow-purple-500 shadow-sm" : "shadow-md"
          } rounded-sm py-1 px-3 bg-black bg-opacity-30`}
          onClick={() => {
            setSignIn((prev) => !prev);
          }}
        >
          Sign In
        </button>
      )}
      <AnimatePresence>
        {signin && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setSignIn(false)}
            ></motion.div>
            <motion.div
              initial={{ top: "110%" }}
              exit={{ top: "110%" }}
              animate={{
                top: "25vh",
                transition: { type: "spring", stiffness: 50 },
              }}
              className="fixed top-[-50px] right-10 left-10 bg-gradient-to-tr from-black to-purple-900 bottom-10 rounded-md shadow-sm z-10 p-3 overflow-y-auto"
            >
              <h2>Sign in or sign up</h2>
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
                  className="bg-black bg-opacity-30 rounded-sm shadow-md mt-3 px-3 py-1"
                >
                  Sign in
                </button>
              </form>
              <hr />
              <p className="mt-2 text-center">or</p>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    className="bg-black shadow-lg rounded-sm py-2 px-3"
                    onClick={signIn}
                    type="button"
                    key={provider.name}
                  >
                    {provider.name}
                  </button>
                ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
