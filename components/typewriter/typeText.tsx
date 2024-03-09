"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Cursor from "./cursor";
import { useEffect, useRef, useState } from "react";

const TypeText = ({
  text = "I'M AKANKSHA.",
  hideCursor = false,
  delay=0
}: {
  text?: string;
  hideCursor?: boolean;
  delay?:number
}) => {
  const baseText = text;
  const count = useMotionValue(0);
  const [completed,setCompleted] = useState(false)
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );
  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween", // Not really needed because adding a duration will force "tween"
      duration: 1,
      ease: "easeInOut",
      delay,
      onComplete() {
        setCompleted(true)
      },
    });
    return controls.stop;
  }, []);

  return (
    <span>
      <motion.h1 className="  text-lighTextPrimary font-black text-4xl">{displayText||" "}</motion.h1>
     
    </span>
  );
};

export default TypeText;
