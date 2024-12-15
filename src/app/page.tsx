"use client"
import { useEffect, useState } from "react";
export function usePersistentState<Type>(key: string, initialState: Type | (() => Type)): [Type, React.Dispatch<React.SetStateAction<Type>>] {
  const prefixedKey = 'use-persistent-state-' + key
  // read key from local storage if not found use default value
  const [value, setValue] = useState<Type>(() => {
    if (typeof window === 'undefined') {
      return initialState;
    }
    const storedValue = localStorage.getItem(prefixedKey);
    if (storedValue === null) {
      if (typeof initialState === 'function') {
        return (initialState as () => Type)();
      } else {
        return initialState;
      }
    } else {
      return JSON.parse(storedValue);
    }
  });
  // update local storage when value changes
  useEffect(() => {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [value, prefixedKey]);
  return [value, setValue];
}

const page = () => {
  const [darkMode, setDarkMode] = usePersistentState('dark-mode', false);
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
