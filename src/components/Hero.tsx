import { motion } from "framer-motion";
import imgPersonal from "../assets/imgProfile.png";
import { HERO_CONTENT } from "../constants";

const containerLeft = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const containerRight = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 1,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={containerLeft(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Hoang Thai Duong
            </motion.h1>
            <motion.span
              variants={containerLeft(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={containerLeft(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={containerRight(1)}
              initial="hidden"
              animate="visible"
              src={imgPersonal}
              alt="imgPersonal"
              className=" rounded-xl"
              width="70%"
              height="70%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
