"use client";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const initialDarkModeState = false;

  // State to handle dark mode
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      setDarkMode(initialDarkModeState);
    }
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  if (darkMode === null) {
    return <div>Loading...</div>; // Show loading state while determining darkMode
  }

  return (
    <div>
      <h1>Dark Mode: {darkMode ? "On" : "Off"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <div>
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <label>Dark Mode</label>
      </div>
    </div>
  );
};

export default DarkMode;
