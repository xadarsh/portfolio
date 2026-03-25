import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiMail, HiLocationMarker, HiDownload } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/images/profile2.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary-light mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold gradient-text"
          >
            Know Who I Am
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative group">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
              <motion.div
                className="relative glass rounded-3xl p-2 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-2xl" />
                <img
                  src={profileImg}
                  alt="Adarsh Maurya"
                  className="w-full h-auto object-contain rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 p-4 glass rounded-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <HiSparkles className="text-yellow-400" size={24} />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 p-3 glass rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-sm font-medium gradient-text">Developer</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              I'm <span className="gradient-text">{personalInfo.name}</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in software development and a passion for
              creating elegant solutions, I bring ideas to life through clean,
              efficient code. I'm constantly learning and adapting to new
              technologies to stay at the forefront of web development.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                className="flex items-center gap-3 p-4 glass rounded-xl"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                  <HiMail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium text-sm truncate">
                    {personalInfo.email}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 p-4 glass rounded-xl"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-secondary to-accent">
                  <HiLocationMarker size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            <motion.a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 mt-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
