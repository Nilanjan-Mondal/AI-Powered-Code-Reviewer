import illustrations from "../assets/illustration.png";

function Hero({ onStart }) {
    return (
      <main className="flex flex-col items-center p-8 bg-gray-900 min-h-screen text-white w-full">
        {/* Navbar */}
        <nav className="w-full max-w-7xl flex justify-between items-center py-4 px-6 bg-gray-800 rounded-md border border-gray-700 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-100">Code Reviewer</h1>
          <button
            onClick={onStart} // Trigger state change
            className="py-2 px-6 bg-red-500 text-white rounded-md text-lg hover:bg-red-600 transition-transform transform hover:scale-105 duration-300"
          >
            Get Started
          </button>
        </nav>
  
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between flex-1 text-center max-w-6xl w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 px-6">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 text-transparent bg-clip-text">
              AI-Powered Code Reviews
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Get instant feedback on your code, improve efficiency, and follow best practices with AI-driven insights.
            </p>
            <button
              onClick={onStart} // Triggers navigation
              className="py-3 px-8 bg-red-500 text-white rounded-md text-xl hover:bg-red-600 transition-transform transform hover:scale-105 duration-300 shadow-md"
            >
              Start Reviewing
            </button>
          </div>
  
          {/* Right Content - Illustration */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src={illustrations}
              alt="Code Review Illustration"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    );
  }
  
  export default Hero;
  