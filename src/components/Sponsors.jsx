import brands from "../assets/brands.png";

const Sponsors = () => {
  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <h3 className="heading__3 text-center">Partners and Sponsors</h3>
      <span className="block paragraph__2 text-center w-full md:w-2/5 mx-auto -mt-4">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </span>
      <div className="brands mt-14">
        <img src={brands} alt="brands" />
      </div>
      {/* left gradient */}
      <div className="absolute z-[1] w-[20%] h-[42%] top-8 left-0 pink__gradient" />
      <div className="absolute z-[0] w-[10%] h-[10%] rounded-full white__gradient top-0" />
      {/* right gradient */}
      <div className="absolute z-[1] w-[22%] h-[30%] -bottom-10 -right-52 pink__gradient" />
      <div className="absolute z-[0] w-[10%] h-[10%] rounded-full white__gradient bottom-0 right-0" />
    </section>
  );
};

export default Sponsors;
