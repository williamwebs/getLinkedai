import { criterias } from "../constants";
import { Btn } from "./index";
import img from "../assets/man.png";
import star from "../assets/star.png";
import starw from "../assets/starw.png";
import starpu from "../assets/starpu.png";

const Criteria = () => {
  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-16">
        <div className="image w-full md:w-1/2 z-10 relative">
          <img src={img} alt="" className="z-10" />
          <img
            src={starpu}
            alt=""
            className="absolute w-[15px] md:w-[20px] top-0 md:-top-16 left-[50%] md:left-28 "
          />
          <img
            src={starw}
            alt=""
            className="absolute hidden md:block w-[15px] md:w-[20px] bottom-0 right-0 "
          />
          <img
            src={star}
            alt=""
            className="absolute w-[12px] md:w-[15px] top-[50%] left-[50%] "
          />
          <div className="gradient hidden md:block w-[80px] h-[80px] rounded-full absolute top-0 left-16 -z-[1] "></div>
        </div>
        <div className="content w-full md:w-1/2">
          <h3 className="heading__3 clash700">
            Judging Criteria
            <br />
            <span className="text-lightPurple">Key attributes</span>
          </h3>
          {criterias.map((criteria) => (
            <li className="list-none paragraph__2 mb-6" key={criteria.title}>
              <span className="text-pink font-Montserrat font-bold">
                {criteria.title}
              </span>{" "}
              {criteria.content}
            </li>
          ))}
          <div className="cta text-center md:text-left mt-10 md:mt-0">
            <Btn text="Read More" link="/" />
          </div>
        </div>
        <div className="absolute z-[1] w-[22%] h-[22%] bottom-28 pink__gradient" />
        <div className="absolute z-[0] w-[15%] h-[15%] rounded-full white__gradient bottom-28" />
        {/* right gradient */}
        <div className="absolute z-[1] w-[22%] h-[30%] -bottom-10 -right-52 pink__gradient" />
        <div className="absolute z-[0] w-[10%] h-[10%] rounded-full white__gradient bottom-0 right-0" />
      </div>
    </section>
  );
};

export default Criteria;
