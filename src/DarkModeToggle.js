import React, { useEffect, useState } from "react";
import "./DarkModeToggle.css";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);

    if (prefersDark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);

    if (!isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      <i className={`theme-icon ${isDarkMode ? "fas fa-sun" : "fas fa-moon"}`}></i>
    </button>
  );
};

export default ThemeToggle;
