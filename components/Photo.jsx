"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[458px] xl:h-[458px] mix-blend-lighten">
          {/* <Image
            src="/assets/vision1.jpeg"
            priority
            quality={100}
            fill
            alt=""
            
          /> */}
          <motion.img
            src="/assets/vision1.jpeg"
            alt="Profile"
            initial={{ y: 0 }}
            animate={{ y: [-20, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="object-contain rounded-3xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
