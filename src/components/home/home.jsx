import { NavLink } from "react-router";
import "./home.css";
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

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

function Home() {
  return (
    <>
      <button className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>

      <div className="flex items-center justify-center w-auto h-screen ">
        <NavLink
          to="/login"
          end
          className="btn rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium py-2.5 shadow-lg shadow-indigo-200 hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 transition"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          end
          className="btn rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium py-2.5 shadow-lg shadow-indigo-200 hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 transition"
        >
          Signup
        </NavLink>
      </div>
    </>
  );
}

export default Home;
