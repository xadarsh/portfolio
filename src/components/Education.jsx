import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaBook, FaCalendar } from "react-icons/fa";
import { education } from "../data/portfolioData";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="py-20 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary-light mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Academic Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background that shaped my technical foundation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 md:p-8 hover-lift"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-secondary">
                        {edu.icon === "graduation" ? (
                          <FaGraduationCap size={24} className="text-white" />
                        ) : (
                          <FaBook size={24} className="text-white" />
                        )}
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-primary-light">{edu.field}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>

                    <div className={`flex items-center gap-2 text-gray-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <FaCalendar size={16} />
                      <span>{edu.duration}</span>
                    </div>

                    <p className="text-gray-400">{edu.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:flex items-center justify-center w-12">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary glow"
                    whileHover={{ scale: 1.5 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
