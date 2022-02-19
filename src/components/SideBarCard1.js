import React from "react";

const SideBarCard1 = () => {
  return (
    <div>
      <div className="sidebar-card-container">
        <div className="heading">
          <p>Members</p>
          <p>No of members</p>
        </div>
      </div>

      <div className="sidebar-card-body">
        <div className="sidebar-card">
          <img src="../img/avatar-1.png" alt="user" />
          <h2>Person 1</h2>
        </div>
        <div className="sidebar-card">
          <img src="../img/avatar-1.png" alt="user" />
          <h2>Person 1</h2>
        </div>
        <div className="sidebar-card">
          <img src="../img/avatar-1.png" alt="user" />
          <h2>Person 1</h2>
        </div>
        <div className="sidebar-card">
          <img src="../img/avatar-1.png" alt="user" />
          <h2>Person 1</h2>
        </div>
      </div>
    </div>
  );
};

export default SideBarCard1;
