import React from "react";
import Card from "./Card";
import Hero from "./Hero";

const Main = () => {
  return (
    <div className="main">
      <Hero />
      <div className="filter-toggel">
        <img src="../img/filter.svg" alt="filter" />
        <p>Recents</p>
        <img src="../img/down-arrow.svg" alt="down-arrow" />
      </div>

      <div className="main-body">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
