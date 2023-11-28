import React from "react";
import homePhoto from "../assets/images/home-photo.png";

export const Home: React.FC = () => {
  return (
    <div id="home" className="split-background">
      <div className="left-panel">
        <div className="photo">
          <img src={homePhoto} alt="photo-profile" />
        </div>
      </div>
      <div className="right-panel">
        <div className="biodata">
          <h1>Muhammad Lutfi Badila</h1>
          <p>Universitas Muhammadiyah Sidoarjo</p>
          <p>FE Developer</p>
          <p>I have less than one year experience</p>
          <p>My Skill</p>
          <div className="skill"></div>
        </div>
      </div>
    </div>
  );
};
