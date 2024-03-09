"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Cursor from "./cursor";
import { useEffect } from "react";

const TypeText = () => {
    const baseText = "HELLO! I'M AKANKSHA";
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.slice(0, latest)
    );
    useEffect(() => {
        const controls = animate(count, baseText.length, {
          type: "tween", // Not really needed because adding a duration will force "tween"
          duration: 1,
          ease: "easeInOut",
        });
        return controls.stop;
      }, []);

      
  return (
   <span>
    <motion.span>
    {displayText}
    </motion.span>
    <Cursor/>
   </span>
  )
}

export default TypeText