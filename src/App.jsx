import { useContext, useState } from "react";
import "./App.css";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import { NavLink } from "react-router";
import Dashboard from "./components/dashboard/dashboard";
import { ThemeContext, ThemeProvider } from "./components/theme/theme";

function App() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
