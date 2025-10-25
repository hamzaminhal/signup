import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme((pre) => {
      return pre === "light" ? "dark" : "light";
    });
    document.querySelector("html").classList.remove("light", "dark");
    theme === "light"
      ? document.querySelector("html").classList.add("light")
      : document.querySelector("html").classList.add("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
