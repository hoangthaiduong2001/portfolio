import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" width={80} height={80} />
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaFacebook />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default NavBar;
