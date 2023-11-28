import { IoLogoFacebook } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="contact-follow">
          <h3 className="contact-title">Contact and Follow Us On</h3>
          <div className="contact-icons">
            <a href="">
              <IoLogoFacebook color="white" size={40} />
            </a>
            <a href="">
              <GrInstagram color="white" size={30} />
            </a>
            <a href="">
              <FaLinkedin color="white" size={35} />
            </a>
            <a href="">
              <SiWhatsapp color="white" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
