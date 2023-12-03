import { FaWifi } from "react-icons/fa";
import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={`navbar ${navbarColor ? "navbarColor" : ""}`}>
      <div className="nav">
        <span className="navbar_brand">
          <p className="navbar_brand-icon">
            <FaWifi />
          </p>
          WIFI MANAGEMENT SYSTEM
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
