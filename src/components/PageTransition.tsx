"use client";

import React from "react";
import { motion as m } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <m.div
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className='min-h-[calc(100vh-5rem)]'
    >
      {children}
    </m.div>
  );
};
