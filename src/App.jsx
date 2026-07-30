import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar />

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;