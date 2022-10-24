import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <Link to="">
        <button>Home</button>
      </Link>
      <Link to="/newRecipe">
        <button>Add Recipe</button>
      </Link>
    </header>
  );
};

export default Header;
