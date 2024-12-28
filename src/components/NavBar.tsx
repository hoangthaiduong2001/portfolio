import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" width={80} height={80} />
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ho%C3%A0ng-th%C3%A1i-d%C6%B0%C6%A1ng-9904a4253/"
          target="_blank"
        >
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/hoangthaiduong2001" target="_blank">
          <FaGithub className="cursor-pointer" />
        </a>
        <a href="https://www.facebook.com/duongtantien90" target="_blank">
          <FaFacebook className="cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/duongtantien90/" target="_blank">
          <FaInstagram className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
