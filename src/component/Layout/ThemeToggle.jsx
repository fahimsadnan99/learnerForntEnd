import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const readTheme = () =>
  document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(readTheme);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be blocked; the theme still applies for this visit */
    }
    setTheme(next);
  };

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={label} title={label}>
      {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
};

export default ThemeToggle;
