import homePhoto from "../assets/images/home-photo.png";
import { SiJavascript, SiTailwindcss, SiCss3 } from "react-icons/si";
import { FaHtml5, FaReact, FaVuejs, FaSass } from "react-icons/fa";

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
          <div className="skill">
            <SiJavascript size={40} />
            <FaHtml5 size={40} />
            <FaReact size={40} />
            <FaVuejs size={40} />
            <SiTailwindcss size={40} />
            <SiCss3 size={40} />
            <FaSass size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};
