import React, { useState } from "react";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import "./index.css"; // Ensure Tailwind + custom CSS is imported

function App() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="relative w-80 h-96 cursor-pointer perspective">
        <div
          className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          <FrontCard onClick={() => setFlipped(true)} />
          <BackCard onClick={() => setFlipped(false)} />
        </div>
      </div>
    </div>
  );
}

export default App;
