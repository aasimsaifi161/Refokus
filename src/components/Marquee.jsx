import { motion } from "framer-motion";

function Marquee({ imagesurl, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-25 py-8 pr-35"
      >
        {imagesurl.map((url, index) => (
          <img key={index} className="" src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-25 py-8 pr-35"
      >
        {imagesurl.map((url, index) => (
          <img key={index} className="" src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
