import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router";

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>

    </>
  );
}

export default App;
