import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
      <h1>Crust & Co.</h1>
      <p>Where Every Slice is a Work of Art!</p>
      <Link to="/menu">
        <button>Order Now</button>
      </Link>
    </div>
  </div>
  );
}

export default Home;
