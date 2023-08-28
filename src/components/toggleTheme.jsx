import { useState } from "react";
import useDarkMode from "../Hooks/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [oppTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(oppTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(oppTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          size={28}
          sunColor="white"
        />
      </div>
    </>
  );
}
