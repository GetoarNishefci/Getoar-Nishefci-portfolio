"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="relative flex items-center justify-center w-[280px] h-[280px] xl:w-[460px] xl:h-[460px]">
 <motion.div
  className="absolute w-full h-full"
  initial={{ opacity:0 }}
  animate={{ opacity:1, transition: {delay:1,duration:0.4,ease:"easeIn"} }}
>
  <svg
    className="w-full h-full"
    fill="transparent"
    viewBox="0 0 420 420"
    xmlns="http://www.w3.org/2000/svg"
  >
  <motion.circle
  cx="210"   
  cy="210"   
  r="170"
  stroke="#00c2e0"
  strokeWidth="5"
  strokeLinecap="round"
  strokeLinejoin="round"
  initial={{ strokeDasharray: "24 10 0 0" }}
  animate={{
    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
  }}
  transition={{
    repeat: Infinity,
    duration: 10,
    repeatType: "reverse",
  }}
/>
  </svg>
</motion.div>



<motion.div
   initial={{ opacity:0 }}
  animate={{ opacity:1, transition: {delay:1,duration:0.4,ease:"easeIn"} }}
>
  <div className="relative w-[200px] h-[200px] xl:w-[360px] xl:h-[350px] translate-y-3 xl:translate-y-2 rounded-full overflow-hidden mix-blend-lighten">
    <Image
      src="/assets/IMG_2016.png"
      priority
      quality={100}
      fill
      alt=""
      className="object-cover"
    />
  </div>
</motion.div>
      </div>
    </div>
  );
};
