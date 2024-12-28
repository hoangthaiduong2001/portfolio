import { motion, RepeatType } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { RiJavascriptFill, RiNextjsFill, RiReactjsLine } from "react-icons/ri";

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
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <RiNextjsFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <DiMongodb className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <IoLogoNodejs className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-x2l border-4 border-neutral-800 p-4"
        >
          <RiJavascriptFill className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
