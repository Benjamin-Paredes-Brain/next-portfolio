"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ArrowButtonUp = () => {
  const [up, setUp] = useState(false)

  const handleUp = () => {
    setUp(true);

    const HomeRef = document.getElementById("home")
    if (HomeRef) {
      const offset = 16;
      const targetPosition = HomeRef.offsetTop - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
        duration: 2000
      });
    }
  };

  return (
    <div className="mb-6">
      <motion.div onClick={handleUp}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div
          initial={{ scale: 0, borderColor: "transparent" }}
          animate={{ scale: 1}}
          transition={{ duration: 1 }}
        >
          <span className="text-xl cursor-pointer text-customColor6"><FaArrowUp /></span>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default ArrowButtonUp;