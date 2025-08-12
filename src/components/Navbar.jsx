import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaBrain } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom px-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaBrain
              className={`text-3xl ${scrolled ? "text-primary" : "text-white"}`}
            />
            <span
              className={`text-2xl font-bold ${
                scrolled ? "gradient-text" : "text-white"
              }`}
            >
              Mindly
            </span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer transition-all duration-300 font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-primary"
                } hover:scale-110`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 bg-white/95 backdrop-blur-md rounded-lg p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-primary transition-colors cursor-pointer font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
