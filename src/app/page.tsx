"use client"
import { init } from "next/dist/compiled/webpack/webpack";
import { use, useEffect, useState } from "react";

const page = () => {
  const initialDarkModeState = false;

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return initialDarkModeState;
    const savedFilters = localStorage.getItem("darkMode");
    return savedFilters ? JSON.parse(savedFilters) : initialDarkModeState;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return <div>
    <h1>Dark Mode: {darkMode ? "On" : "Off"}</h1>
    <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    <div>
      <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <label>Dark Mode</label>
    </div>
  </div>;
};

export default page;
