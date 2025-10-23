import { useState } from "react";
import "./App.css";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
