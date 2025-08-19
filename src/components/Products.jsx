import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "../assets/refokus.webm"
import video2 from "../assets/refokus2.webm"
import video3 from "../assets/refokus3.webm"
import video4 from "../assets/refokus4.webm"

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2002",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product count={index} data={val} mover={mover} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[20rem] left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className="w-full h-full"
          ><video className="w-[100%] h-[100%] object-cover" src={video1} loop autoPlay muted></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className="w-full h-full"
          ><video className="w-[100%] h-[100%] object-cover" src={video2} loop autoPlay muted></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className="w-full h-full"
          ><video className="w-[100%] h-[100%] object-cover" src={video4} loop autoPlay muted></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className="w-full h-full"
          ><video className="w-[100%] h-[100%] object-cover" src={video3} loop autoPlay muted></video></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
