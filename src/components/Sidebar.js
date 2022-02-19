import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="home-button">
        <img src="../img/home.svg" alt="home" />
        <p>Home</p>
      </div>
      <div className="explore">
        <img src="../img/explore.svg" alt="explore" />
        <p>Explore Groups</p>
      </div>
      <h3 className="sub-heading">Groups</h3>

      <div className="groups">
        <div className="heading">
          <img src="../img/down-arrow.png" alt="down" />
          <h2>CareerNaksha Groups</h2>
        </div>

        <div className="group">
          <img src="../img/avatar.png" alt="avatar" />
          <p>Group 1</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
