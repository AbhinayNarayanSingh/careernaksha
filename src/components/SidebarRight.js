import React from "react";
import SideBarCard1 from "./SideBarCard1";
import SideBarCard2 from "./SideBarCard2";
import SideBarCard3 from "./SideBarCard3";

const SidebarRight = () => {
  return (
    <div className="SidebarRight">
      <p className="login">Login</p>

      <div className="right-sidebar-cardContainer">
        <SideBarCard1 />
        <SideBarCard2 />
        <SideBarCard3 />
      </div>
    </div>
  );
};

export default SidebarRight;
