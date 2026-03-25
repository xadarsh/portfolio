import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { personalInfo, socialLinks, navLinks } from "../data/portfolioData";

const Footer = () => {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
    send: FaTelegram,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          <div>
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {"<Adarsh />"}
            </motion.a>
            <p className="text-gray-400 mb-6">
              {personalInfo.bio.slice(0, 120)}...
            </p>
            <div className="flex gap-3">
              {socialLinks.slice(0, 5).map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {Icon && <Icon size={18} className="text-gray-400 hover:text-white" />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:gradient-text transition-all duration-300 inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="text-primary-light">Email:</span>
                <br />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <span className="text-primary-light">Location:</span>
                <br />
                {personalInfo.location}
              </li>
              <li>
                <span className="text-primary-light">Available for:</span>
                <br />
                Freelance, Full-time
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/10 gap-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex-1" />
            <p className="text-gray-400 text-sm">
              Designed & Built by <span className="gradient-text font-semibold">{personalInfo.name}</span>
            </p>
            <div className="flex-1 flex justify-end">
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-full glass hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiArrowUp size={16} className="text-gray-400 hover:text-white" />
              </motion.button>
            </div>
          </div>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
