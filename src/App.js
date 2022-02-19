import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="body-container">
        <Sidebar />
        <Main />
        <SidebarRight />
      </div>
    </div>
  );
};

export default App;
