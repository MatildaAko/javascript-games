import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/rockpaperscissors">Rock Paper Scissors</Link>
      <Link to="/memory">Memory Game</Link>
    </div>
  );
};

export default NavBar;
