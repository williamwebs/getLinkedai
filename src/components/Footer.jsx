import { Link, NavLink } from "react-router-dom";
import logo from "../assets/getlinked.png";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiSolidPhoneCall,
} from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-0 md:px-20 flex flex-col md:flex-row md:items-start md:space-x-10">
        <div className="col_1 flex flex-col items-start space-y-4 md:space-y-10 w-full md:w-2/4 py-10">
          <div className="top">
            <div className="logo w-1/2 md:w-1/4 mb-4">
              <img src={logo} alt="" />
            </div>
            <p className="paragraph__2_ md:paragraph__2 pr-20">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="bottom">
            <span className="paragraph__2 mr-4">Terms of Use </span>{" "}
            <span className="paragraph__2 border-l-4 border-normalPurple pl-4">
              Privacy Policy
            </span>
          </div>
        </div>
        <div className="col_2 w-full md:w-1/4 md:pt-10">
          <h6 className="text-normalPurple capitalize font-Montserrat font-semibold text-sm mb-4">
            useful links
          </h6>
          <div className="flex flex-col space-y-1">
            <Link to="" className="footer__links">
              Overview
            </Link>
            <Link to="" className="footer__links">
              Timeline
            </Link>
            <Link to="" className="footer__links">
              FAQs
            </Link>
            <NavLink to="" className="footer__links">
              Register
            </NavLink>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-11">
            <p className="font-normal font-Montserrat text-xs text-normalPurple">
              follow us
            </p>
            <div className="icon__box flex items-center space-x-2">
              <AiOutlineInstagram className="footer__icons" />
              <FaXTwitter className="footer__icons" />
              <BiLogoFacebook className="footer__icons" />
              <BiLogoLinkedin className="footer__icons" />
            </div>
          </div>
        </div>
        <div className="col_3 w-full md:w-1/4 pt-10">
          <h6 className="text-normalPurple capitalize font-Montserrat font-semibold text-sm mb-4">
            contact us
          </h6>
          <div className="flex flex-col space-y-4">
            <Link
              to="tel:"
              className="footer__links flex items-center space-x-2"
            >
              <BiSolidPhoneCall /> <span>+234 6707653444</span>
            </Link>
            <p className="footer__links flex items-start space-x-2">
              <HiLocationMarker />
              <span>
                27,Alara Street <br /> Yaba 100012 <br />
                Lagos State
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom text-center mt-4">
        <span className="footer__links">
          All rights reserved. © getlinked Ltd.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
