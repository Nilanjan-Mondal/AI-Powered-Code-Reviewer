import { useState } from "react";
import Hero from "./Pages/Hero"; // Adjust path if using 'components'
import Home from "./Pages/Home"; // Rename App logic to CodeReviewer.jsx

function App() {
  const [showReviewer, setShowReviewer] = useState(false);

  return showReviewer ? (
    <Home />
  ) : (
    <Hero onStart={() => setShowReviewer(true)} />
  );
}

export default App;
