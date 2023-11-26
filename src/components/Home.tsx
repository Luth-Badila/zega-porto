// SplitBackground.tsx
import React from "react";

export const Home: React.FC = () => {
  return (
    <div id="home" className="split-background">
      <div className="left-panel">
        <img src="" alt="photo-profile" />
      </div>
      <div className="right-panel">
        <div className="biodata">
          <h1>Muhammad Lutfi Badila</h1>
          <p>Universitas Muhammadiyah Sidoarjo</p>
          <p>FE Developer</p>
          <p>Pengalaman kurang dari 1 tahun</p>
        </div>
      </div>
    </div>
  );
};
