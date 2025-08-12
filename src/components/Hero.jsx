import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaChevronDown,
  FaHeart,
  FaBrain,
  FaUsers,
  FaStar,
  FaLightbulb,
  FaRocket,
  FaMagic,
} from "react-icons/fa";
import { heroContent } from "../data/content";

const Hero = () => {
  const floatingIcons = [
    {
      Icon: FaHeart,
      delay: 0,
      position: "top-[15%] left-[10%]",
      color: "text-pink-300",
    },
    {
      Icon: FaStar,
      delay: 1,
      position: "top-[25%] right-[15%]",
      color: "text-yellow-300",
    },
    {
      Icon: FaLightbulb,
      delay: 2,
      position: "bottom-[30%] left-[20%]",
      color: "text-amber-300",
    },
    {
      Icon: FaUsers,
      delay: 3,
      position: "bottom-[20%] right-[25%]",
      color: "text-cyan-300",
    },
    {
      Icon: FaMagic,
      delay: 4,
      position: "top-[40%] left-[35%]",
      color: "text-purple-300",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Gradient Background with Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
          <div className="absolute top-40 right-1/3 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
          <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-6000" />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2060%200%20L%200%200%200%2060%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.05)%22%20stroke-width%3D%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%20/%3E%3C/svg%3E')] opacity-30"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Icons Background */}
      {floatingIcons.map(({ Icon, delay, position, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} ${color} opacity-20`}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + delay,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="text-4xl md:text-6xl" />
        </motion.div>
      ))}

      <div className="relative container-custom px-4 text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Brain Icon with Glow Effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            className="inline-block mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 blur-3xl opacity-60 animate-pulse" />
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaBrain className="text-7xl md:text-9xl mx-auto mb-4 relative bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl" />
            </motion.div>
            <FaRocket className="absolute -top-2 -right-2 text-2xl text-yellow-400 animate-bounce" />
          </motion.div>

          {/* Animated Title with Letter Animation */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient-x">
              {heroContent.title}
            </span>
            <motion.span
              className="absolute -top-6 -right-6 text-3xl"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="text-2xl md:text-4xl mb-4 font-light bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {heroContent.subtitle}
          </motion.p>

          {/* Description with Typewriter Effect */}
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-100 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {heroContent.description}
          </motion.p>

          {/* Enhanced CTA Button */}
          <Link
            to="alasan"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                {heroContent.ctaText}
                <FaRocket className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 -top-2 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
        >
          {heroContent.stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(255,255,255,0.2)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative glass-effect rounded-2xl p-8 border-2 border-white/30 backdrop-blur-xl">
                <motion.div
                  className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-base text-gray-100 font-medium">
                  {stat.label}
                </div>
                <div className="absolute -top-3 -right-3 text-2xl">
                  {index === 0 && "🎯"}
                  {index === 1 && "🚀"}
                  {index === 2 && "💫"}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white blur-xl opacity-50 animate-pulse" />
            <FaChevronDown className="text-4xl text-white relative" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
