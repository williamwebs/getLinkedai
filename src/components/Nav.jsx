import logo from "../assets/getLinked.png";
import { Link, NavLink } from "react-router-dom";
import { Btn } from "./index";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const linkStyles = ({ isActive }) => ({
    color: isActive ? "linear-gradient(90deg, #903aff 3.08%, #ff26b9 93.85%)" : "#fff"
  })

  return (
    <>
      {/* desktop */}
      <nav className="container hidden mx-auto p-2 md:flex items-center justify-between py-4">
        <Link to="/" className="logo">
          <img src={logo} alt="getLinked logo" />
        </Link>
        <div className="flex items-center space-x-16">
          <Link to="" className="nav__links">
            Timeline
          </Link>
          <Link to="" className="nav__links">
            Overview
          </Link>
          <Link to="" className="nav__links">
            FAQs
          </Link>
          <NavLink to="/contact" className="nav__links" style={linkStyles}>
            Contact
          </NavLink>
          <Btn text="Register" link="/register" />
        </div>
      </nav>
      {/* mobile */}
      <nav className="container md:hidden flex items-center justify-between mx-auto p-2 py-4 relative">
        <Link to="/" className="logo w-1/3">
          <img src={logo} alt="getLinked logo" />
        </Link>

        {/* hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar bar_1"></div>
          <div className="bar bar_2"></div>
          <div className="bar bar_3"></div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="flex flex-col items-start space-y-8 bg-purple-900 w-full h-screen z-20 absolute top-0 left-0 p-12 pt-20">
          <Link to="" className="nav__links__mobile">
            Timeline
          </Link>
          <Link to="" className="nav__links__mobile">
            Overview
          </Link>
          <Link to="" className="nav__links__mobile">
            FAQs
          </Link>
          <NavLink to="/contact" className="nav__links__mobile">
            Contact
          </NavLink>
          <div className="cta">
            <Btn text="Register" link="/register" />
          </div>
          <div
            onClick={toggleMenu}
            className="close w-10 h-10 rounded-full cursor-pointer absolute top-0 right-10 flex items-center justify-center border-2 border-purple-600"
          >
            <ImCross className="text-primary " />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
