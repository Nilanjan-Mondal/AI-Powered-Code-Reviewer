import { motion } from "framer-motion";
import illustrations from "../assets/illustration.png";

function Hero({ onStart }) {
  return (
    <main className="flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen text-white w-full relative">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-950 opacity-40"></div>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl flex justify-between items-center py-3 px-3 sm:py-4 sm:px-6 bg-gray-900 rounded-md border border-gray-700 shadow-lg relative z-10"
      >
        <h1 className="text-lg sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">
          SmartLint
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onStart}
          className="py-2 px-3 sm:px-6 bg-blue-500 text-white rounded-md text-xs sm:text-lg hover:bg-blue-600 transition-transform duration-300 shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between flex-1 text-center max-w-6xl w-full px-3 sm:px-6 mt-6 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">
            AI-Powered Code Reviews
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 mb-6 leading-relaxed">
            Get instant feedback on your code, improve efficiency, and follow best practices with AI-driven insights.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onStart}
            className="py-2 px-4 sm:py-3 sm:px-8 bg-blue-500 text-white rounded-md text-base sm:text-xl hover:bg-blue-600 transition-transform duration-300 shadow-md"
          >
            Start Reviewing
          </motion.button>
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center"
        >
          <motion.img
            src={illustrations}
            alt="Code Review Illustration"
            className="w-3/4 sm:w-full max-w-xs sm:max-w-sm rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </main>
  );
}

export default Hero;
