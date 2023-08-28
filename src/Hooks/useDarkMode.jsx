import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme);
  const oppTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(oppTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme, oppTheme]);

  return [oppTheme, setTheme];
}
