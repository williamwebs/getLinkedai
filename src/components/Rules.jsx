import rule from "../assets/rule.png";

const Rules = () => {
  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <div className="flex flex-col-reverse md:flex-row items-center space-x-0 md:space-x-16">
        <div className="content w-full md:w-1/2 z-10 mt-10 mb:mt-0">
          <h3 className="heading__3">
            Rules and <br />
            <span className="text-lightPurple">Guidelines</span>
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
        <div className="image w-full md:w-1/2">
          <img src={rule} alt="" />
        </div>
        {/* top gradient */}
        <div className="absolute z-[1] w-[20%] h-[42%] top-14 left-40 pink__gradient" />
        <div className="absolute z-[0] w-[15%] h-[15%] rounded-full white__gradient top-0" />
        {/* right gradient */}
        <div className="absolute z-[1] w-[22%] h-[30%] -bottom-10 -right-52 pink__gradient" />
        <div className="absolute z-[0] w-[10%] h-[10%] rounded-full white__gradient bottom-0 right-0" />
      </div>
    </section>
  );
};

export default Rules;
