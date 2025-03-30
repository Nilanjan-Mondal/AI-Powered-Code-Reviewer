import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Syntax highlighting style

function Home() {
  const [code, setCode] = useState("function sum() {\n  return 1 + 1;\n}");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://ai-powered-code-reviewer-server.vercel.app/ai/get-review",
        { code }
      );
      setReview(response.data);
    } catch (error) {
      setReview("Error: Unable to fetch review.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen text-white w-full">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
        SmartLint
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl h-[80vh]">
        {/* Code Editor Section */}
        <div
          className="flex flex-col flex-1 h-full p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-300">
            Code Editor
          </h2>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 bg-gray-900 text-gray-200 rounded-lg border border-gray-700 overflow-auto focus:outline-none text-sm font-mono resize-none shadow-inner"
            placeholder="Write your code here..."
          />
          <button
            onClick={reviewCode}
            disabled={loading}
            className={`mt-4 py-3 px-8 rounded-lg text-lg font-semibold transition duration-300 self-center ${
              loading
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 shadow-lg"
            }`}
          >
            {loading ? "Reviewing..." : "Review Code"}
          </button>
        </div>

        {/* Review Section */}
        <div
          className="flex flex-col flex-1 h-full p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-300">
            Code Review
          </h2>
          <div className="flex-1 bg-gray-800 p-4 rounded-lg border border-gray-700 text-sm overflow-auto shadow-inner text-gray-200">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {review || "Your code review will appear here..."}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;





// import { useState } from "react";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css"; // Syntax highlighting style

// function Home() {
//   const [code, setCode] = useState("function sum() {\n  return 1 + 1;\n}");
//   const [review, setReview] = useState("");

//   async function reviewCode() {
//     try {
//       const response = await axios.post(
//         "https://ai-powered-code-reviewer-server.vercel.app/ai/get-review",
//         { code }
//       );
//       setReview(response.data);
//     } catch (error) {
//       setReview("Error: Unable to fetch review.");
//     }
//   }

//   return (
//     <main className="flex flex-col items-center p-8 bg-gray-900 min-h-screen text-white w-full">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold mb-6 text-center">Code Reviewer</h1>
      
//       <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl h-[80vh]">
//         {/* Code Editor Section */}
//         <div className="flex flex-col flex-1 h-full p-4 bg-gray-800 rounded-md border border-gray-700 shadow-lg overflow-hidden">
//           <textarea
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             className="flex-1 p-4 bg-gray-700 text-white rounded-md border border-gray-600 overflow-auto focus:outline-none text-sm font-mono resize-none"
//           />
//           <button
//             onClick={reviewCode}
//             className="mt-4 py-2 px-6 bg-red-500 text-white rounded-md text-lg hover:bg-red-600 transition duration-300 self-center"
//           >
//             Review Code
//           </button>
//         </div>

//         {/* Review Section */}
//         <div className="flex flex-col flex-1 h-full bg-gray-800 p-6 rounded-md border border-gray-700 shadow-lg overflow-hidden">
//           <h2 className="text-2xl font-semibold mb-4 text-center">Review</h2>
//           <div className="flex-1 bg-gray-700 p-4 rounded-md border border-gray-600 text-sm overflow-auto">
//             <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//               {review || "Your code review will appear here..."}
//             </ReactMarkdown>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Home;