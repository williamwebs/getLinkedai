import bulb from "../assets/bulb.png";

const Introduction = () => {
  return (
    <section className="container mx-auto md:px-20 py-0">
      <div className="flex flex-col md:flex-row items-center space-x-0 space-y-10 md:space-y-0 md:space-x-16">
        <div className="image w-full md:w-1/2">
          <img src={bulb} alt="" />
        </div>
        <div className="content w-full md:w-1/2">
          <h3 className="heading__3">
            Introduction to getlinked <br />{" "}
            <span className="text-lightPurple">tech Hackathon 1.0</span>
          </h3>
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
