import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-xl">
                {experience.role} -{" "}
                <span className="text-purple-100 text-xl">
                  {experience.company}
                </span>
              </h6>
              <div className="mb-4 font-bold text-purple-200">
                Main Responsibilities:{" "}
                <p className="mb-4 text-neutral-400 inline text-sm">
                  {experience.mainResponsibilities}
                </p>
              </div>
              <div className="mb-4 font-bold text-purple-200">
                Main Achievements:{" "}
                <p className="mb-4 text-neutral-400 inline text-sm">
                  {experience.mainAchievements}
                </p>
              </div>
              <div className="mb-4 font-bold text-purple-200">
                Projects:{" "}
                <p className="mb-4 text-neutral-400 inline text-sm">
                  {experience.projects}
                </p>
              </div>

              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Experience;
