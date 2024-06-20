import React from "react";
import { Link } from "react-router-dom";
import "./ Home.css";
import szkola from "./szkola.jpg";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_bottom">
        <div className="home_left">
          <img className="szkola" src={szkola} alt="logo" />
        </div>

        <div className="home_right">
          <div className="home_right_title">GEOPORTAL</div>
          <div className="home_right_subtitle">
            Projekt systemu do zarządzania szkołami w mieście i uczniami
            przypisanymi do danej szkoły oraz nauczycielami przypisanymi do
            danej klasy.
          </div>
          <Link to="services">
            <button className="home_right_button">ROZPOCZNIJ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
