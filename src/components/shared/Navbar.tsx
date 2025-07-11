"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlaneDeparture } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";

import { menuVars, containerVars } from "@/utils/variants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header className="font-body px-10 lg:px-20 bg-white text-black">
      {/* navbar on large screens */}
      {!isOpen && (
        <nav className="flex justify-between items-center py-4 px-2">
          {/* logo */}
          <Link
            href="/"
            aria-label="FlyFair logo"
            className="flex gap-2 items-center "
          >
            <Image
              src="/logo.svg"
              alt="Curioscribe logo"
              width={50}
              height={50}
            />
            <h2 className="text-2xl font-bold text-[#005883]">FlyFair</h2>
          </Link>

          <div className="lg:flex hidden gap-8 z-20">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span>
                <FaPlaneDeparture />
              </span>
              <p>Find Flight</p>
            </Link>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span>
                <IoIosBed />
              </span>
              <p>Find Stays</p>
            </Link>
          </div>

          {/* links on right side */}
          <div className="lg:flex hidden gap-2 z-20">
            <Link
              href="/"
              className="solid-button font-bold rounded-full py-2 px-6"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-button font-bold rounded-full py-2 px-6"
            >
              Destinations
            </Link>
            <Link
              href="/"
              className="solid-button  font-bold rounded-full py-2 px-6"
            >
              Contact Us
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="lg:hidden flex items-center justify-center text-button text-black bg-white w-[3rem] h-[3rem] rounded-xl shadow-md z-20"
          >
            <HiMenuAlt3 />
          </button>
        </nav>
      )}

      {/* navbar on small screens, allowing for a sliding menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-white text-black p-10 z-50 origin-top"
          >
            <div className="flex h-full flex-col py-8 px-4">
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  aria-label="FlyFair logo"
                  className="flex gap-2 items-center "
                >
                  <Image
                    src="/logo.svg"
                    alt="Curioscribe logo"
                    width={50}
                    height={50}
                  />
                  <h2 className="text-2xl font-bold text-[#005883]">FlyFair</h2>
                </Link>

                <button
                  className="text-button text-xl focus:outline-none w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <MdOutlineCancel />
                </button>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4 "
              >
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <span>
                    <FaPlaneDeparture />
                  </span>
                  <p>Find Flight</p>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <span>
                    <IoIosBed />
                  </span>
                  <p>Find Stays</p>
                </Link>
              </motion.div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4 "
              >
                <div className="overflow-hidden flex flex-col items-center gap-2">
                  <Link
                    href="/"
                    className="solid-button font-bold rounded-full py-2 px-6"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                    className="text-button  font-bold rounded-full py-2 px-6"
                  >
                    Destinations
                  </Link>
                  <Link
                    href="/"
                    className="solid-button font-bold rounded-full py-2 px-6"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
