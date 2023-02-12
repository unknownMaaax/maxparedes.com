import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer-style.css";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <a href="https://github.com/unknownMaaax">
        <FaGithub size={32} className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/maxparedesarenas/"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={32} className="icon" />
      </a>
      <a href="https://twitter.com/paredesmaxii" rel="noopener noreferrer">
        <FaTwitter size={32} className="icon" />
      </a>
    </div>
  );
};

export default Footer;
