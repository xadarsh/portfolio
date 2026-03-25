import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTelegram, FaCode } from "react-icons/fa";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { personalInfo, typingTexts, socialLinks } from "../data/portfolioData";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: false,
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: "#6366f1" },
        links: {
          color: "#6366f1",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 60,
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
    send: FaTelegram,
    code: FaCode,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary-light">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 h-12">
          <TypeAnimation
            sequence={typingTexts.flatMap((text) => [text, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text font-semibold"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full glass hover:bg-white/10 font-semibold flex items-center gap-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload size={20} className="group-hover:animate-bounce" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          {socialLinks.map((social, index) => {
            const Icon = socialIcons[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full glass hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <HiArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
