"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const socials = [
  {
    url: "https://github.com/samiulss",
    icon: "/github.png",
  },
  {
    url: "https://twitter.com/samiulss",
    icon: "/twitter.png",
  },
  {
    url: "https://www.instagram.com/samiulss",
    icon: "/instagram.png",
  },
  {
    url: "https://www.facebook.com/samiulss",
    icon: "/facebook.png",
  },
  {
    url: "https://www.pinterest.com/isamiul012",
    icon: "/pinterest.png",
  },
  {
    url: "https://www.linkedin.com/in/samiulss",
    icon: "/linkedin.png",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 1,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
  };

  const itemsVariants = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-8 w-1/3">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.title}
            className={
              pathname === link.url && "bg-black text-white rounded px-1.5"
            }
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">samiul</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* social link */}
      <div className="hidden md:flex gap-4 w-1/3">
        {socials.map((social) => (
          <Link href={social.url} key={social.icon} target="_blank">
            <Image src={social.icon} width="24" height="24" alt="" />
          </Link>
        ))}
      </div>

      {/* responsive menu */}
      <div className="md:hidden">
        <button
          className="w-12 h-8 flex flex-col justify-between relative z-30"
          onClick={() => setToggle(!toggle)}
        >
          <motion.div
            variants={topVariants}
            animate={toggle ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={toggle ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={toggle ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
      </div>

      {/* menu lists */}
      {toggle && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-10"
        >
          {links.map((link) => (
            <motion.div variants={itemsVariants} key={link.title}>
              <Link href={link.url} onClick={() => setToggle(!toggle)}>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
