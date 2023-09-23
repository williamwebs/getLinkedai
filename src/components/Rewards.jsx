import reward from "../assets/Rewards.png";
import trophy from "../assets/trophy.png";

const Rewards = () => {
  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <div className="hidden md:flex flex-row items-center space-y-10 md:space-y-0 space-x-0 md:space-x-16">
        <div className="image w-full md:w-2/5">
          <img src={trophy} alt="" />
        </div>
        <div className="content w-full md:w-3/5">
          <h3 className="heading__3 pl-28">
            Prizes and
            <br />
            <span className="text-lightPurple">Rewards</span>
          </h3>
          <p className="paragraph__2 pr-16 mb-10 -mt-4 pl-28">
            Highlight of the prices or rewards for winners and for participants.{" "}
          </p>
          <img src={reward} alt="rewards" className="p-6" />
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col md:hidden  items-center space-y-10 md:space-y-0 space-x-0 md:space-x-16">
        <div className="image w-full md:w-2/5">
          <h3 className="heading__3">
            Prizes and
            <br />
            <span className="text-lightPurple">Rewards</span>
          </h3>
          <p className="paragraph__2 mb-10">
            Highlight of the prices or rewards for winners and for participants.{" "}
          </p>
          <img src={trophy} alt="" />
        </div>
        <div className="content w-full md:w-3/5">
          <img src={reward} alt="rewards" className="p-6" />
        </div>
      </div>
      {/* top gradient */}
      <div className="absolute z-[1] w-[20%] h-[42%] top-14 left-40 pink__gradient" />
      <div className="absolute z-[0] w-[15%] h-[15%] rounded-full white__gradient top-0" />
      {/* right gradient */}
      <div className="absolute z-[1] w-[22%] h-[30%] -bottom-10 -right-52 pink__gradient" />
      <div className="absolute z-[0] w-[10%] h-[10%] rounded-full white__gradient bottom-0 right-0" />
    </section>
  );
};

export default Rewards;
