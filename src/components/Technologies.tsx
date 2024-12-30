import { motion, RepeatType } from "framer-motion";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { FaCss3, FaHtml5, FaSass } from "react-icons/fa";

import {
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const iconVariant = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse" as RepeatType,
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={iconVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <FaCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariant(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <FaSass className="text-7xl text-pink-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <RiNextjsFill className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <SiReacthookform className="text-7xl text-pink-700" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.6)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <SiReactquery className="text-7xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVariant(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <DiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <DiNodejs className="text-7xl text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
