import React, { createContext, useState, useContext } from "react";

// 1️⃣ Create Theme Context
const ThemeContext = createContext();

// 2️⃣ Create Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Create a Component that uses the Context
const ThemedApp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyles = {
    textAlign: "center",
    padding: "50px",
    transition: "all 0.3s ease",
    backgroundColor: theme === "light" ? "#ffffff" : "#121212",
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  return (
    <div style={appStyles}>
      <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

// 4️⃣ Wrap the App in the Provider
export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
