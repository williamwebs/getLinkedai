import { NavLink } from "react-router-dom";

const Btn = ({ text, link }) => {
  return (
    <NavLink
      to={link}
      className="gradient btn text-primary font-Montserrat font-normal text-base p-2 px-8 rounded w-fit mx-auto md:mx-0"
    >
      {text}
    </NavLink>
  );
};

export default Btn;
