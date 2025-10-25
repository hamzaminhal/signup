import React, { useContext } from "react";
import { ThemeContext } from "../theme/theme";
import Moon from "../assets/moon";
import Sun from "../assets/sun";

export default function ThemeBtn() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <button onClick={handleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
