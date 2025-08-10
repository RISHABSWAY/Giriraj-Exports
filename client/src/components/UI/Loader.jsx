// components/UI/Loader.jsx
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <img
        src="/Assets/LogoinSide.svg"
        alt="Giriraj Exports"
        className="h-20 animate-pulse mb-4"
      />
      <p className="text-[#D97706] font-semibold text-lg tracking-wide">
        Loading Giriraj Exports...
      </p>
    </motion.div>
  );
};

export default Loader;
