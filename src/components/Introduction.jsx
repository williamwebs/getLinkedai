import bulb from "../assets/bulb.png";
import arrow from "../assets/arrow.png";
import star from "../assets/starpu.png";

const Introduction = () => {
  return (
    <section className="container mx-auto md:px-20 py-0">
      <div className="flex flex-col md:flex-row items-center space-x-0 space-y-10 md:space-y-0 md:space-x-16">
        <div className="image w-full md:w-1/2 relative">
          <img src={bulb} alt="" />
          <img
            src={arrow}
            alt=""
            className="absolute w-[60px] left-[40%] -bottom-6 md:right-2 md:-bottom-4 "
          />
          <img
            src={star}
            alt=""
            className="absolute w-[15px] top-28 md:w-[25px] md:top-40 md:-left-10  "
          />
        </div>
        <div className="content w-full md:w-1/2 relative">
          <h3 className="heading__3 clash700">
            Introduction to getlinked <br />{" "}
            <span className="text-lightPurple">tech Hackathon 1.0</span>
          </h3>
          <img
            src={star}
            alt=""
            className="absolute w-[15px] top-0 md:w-[30px] md:top-10 right-0  "
          />
          <p className="paragraph__2 pr-0 md:pr-8">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
