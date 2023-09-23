import img from "../assets/man.png";
import { criterias } from "../constants";
import { Btn } from "./index";

const Criteria = () => {
  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-16">
        <div className="image w-full md:w-1/2 z-10">
          <img src={img} alt="" />
        </div>
        <div className="content w-full md:w-1/2">
          <h3 className="heading__3">
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
          <Btn text="Read More" link="/" />
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
