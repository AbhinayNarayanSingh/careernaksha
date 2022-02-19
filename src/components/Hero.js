import React from "react";

const Hero = () => {
  return (
    <div className="hero-cover">
      <div>
        <h2>Welcome to CareerNaksha</h2>
        <p>
          Firstly, Head over to our website <span>careernaksha.com</span>, and
          join the CareerNaksha Comunity. Upon joining explore and understand
          all the facilities that we are providing.
        </p>
        <div className="action-toggel">
          <p>Posts</p>
          <p>Groups</p>
        </div>
      </div>
      <img src="../img/cover.svg" alt="cover.svg" />
    </div>
  );
};

export default Hero;
