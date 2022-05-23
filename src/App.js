import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import RockPaperScissors from "./RockPaperScissors";
import Home from "./Home";
import Memory from "./Memory";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rockpaperscissors" element={<RockPaperScissors />} />
        <Route exact path="/memory" element={<Memory />} />
      </Routes>
    </div>
  );
}

export default App;
