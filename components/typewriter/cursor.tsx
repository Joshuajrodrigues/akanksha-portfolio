"use client";
import { motion } from "framer-motion";


const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };
const Cursor = () => {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="translate-y-1 inline-block h-5 w-[1px] bg-lightPrimary"
    />
  );
};

export default Cursor;
