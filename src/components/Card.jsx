import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, head, text, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between transition-colors duration-300`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between ">
          <h3>{head}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl mt-8">{text}</h1>
      </div>

      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-3 mt-8 border-[1px] border-zinc-50 text-sm cursor-pointer">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-md text-zinc-400 ">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
