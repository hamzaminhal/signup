import { NavLink } from "react-router";
import "./home.css";
import React, { createContext, useState, useContext } from "react";
import { ThemeContext, ThemeProvider } from "../theme/theme";
import ThemeBtn from "../themeBtn/ThemeBtn";

function Home() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="flex justify-end pt-5 pr-5">
        <ThemeBtn />
      </div>

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
