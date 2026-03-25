import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaAward, FaTrophy, FaBolt } from "react-icons/fa";
import { experience } from "../data/portfolioData";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (type) => {
    switch (type) {
      case "work":
        return <FaBriefcase size={20} />;
      case "internship":
        return <FaBolt size={20} />;
      case "achievement":
        return <FaTrophy size={20} />;
      default:
        return <FaAward size={20} />;
    }
  };

  const getGradient = (type) => {
    switch (type) {
      case "work":
        return "from-primary to-blue-500";
      case "internship":
        return "from-secondary to-pink-500";
      case "achievement":
        return "from-accent to-green-500";
      default:
        return "from-primary to-secondary";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary-light mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional experience and achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 ml-16 md:ml-0"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getGradient(
                        exp.type
                      )} mb-3`}
                    >
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-primary-light font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </motion.div>
                </div>

                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${getGradient(
                      exp.type
                    )} flex items-center justify-center text-white shadow-lg z-10`}
                    whileHover={{ scale: 1.2 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                  >
                    {getIcon(exp.type)}
                  </motion.div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
