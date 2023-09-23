import heroImg from "../assets/hero.png";
import globe from "../assets/globe.png";
import { Btn, Timer } from "./index";

import chain from "../assets/chain.png";
import fire from "../assets/fire.png";
import bulbh from "../assets/bulbh.png";
import star from "../assets/star.png";

const Hero = () => {
  const hackathonEndTime = new Date("2023-09-30T12:00:00Z");

  return (
    <header className="h-full md:h-calc-vh relative">
      <div className="top container mx-auto">
        <span className="block text-primary py-4 text-center md:text-right italic font-Montserrat font-bold text-base md:text-[36px] leading-[19.5px] md:leading-[43.88px]">
          Igniting a Revolution in HR Innovation
        </span>
      </div>

      <div className="container mx-auto mt-10 flex flex-col md:flex-row space-y-10 md:space-y-0 items-center">
        <div className="content w-full md:w-2/3 flex flex-col space-y-6 relative">
          <h1 className="heading__1 z-10 clash700">
            getlinked Tech
            <br /> Hackathon <span className="text-lightPurple">1.0</span>
          </h1>

          {/* chain and fire images */}
          <div className="absolute top-8 right-4 md:top-20 md:right-12  flex items-center w-[28px] md:w-[180px]">
            <img src={chain} alt="" />
            <img src={fire} alt="" />
          </div>
          {/* bulb */}
          <div className="absolute -top-8 right-16 md:-top-12 md:left-[58%] flex items-center w-[20px] md:w-[40px]">
            <img src={bulbh} alt="" />
          </div>
          {/* star */}
          <div className="absolute -top-16 left-10 flex items-center w-[18px] md:w-[30px]">
            <img src={star} alt="" />
          </div>
          {/* star */}
          <div className="absolute right-16 bottom-20 md:left-[50%] flex items-center w-[12px] md:w-[20px]">
            <img src={star} alt="" />
          </div>
          {/* star */}
          <div className="absolute top-0 right-40 flex items-center w-[20px]">
            <img src={star} alt="" />
          </div>

          <p className="paragraph w-full md:w-3/5 pr-6">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Btn text="Register" link="/register" />

          <Timer hackathonEndTime={hackathonEndTime} />
        </div>
        {/* desktop */}
        <div className="image w-full md:w-1/3 hidden md:block">
          <img
            src={globe}
            alt=""
            className="w-1/3 absolute bottom-16 right-0 z-[3]"
          />
          <img
            src={heroImg}
            alt=""
            className="absolute bottom-0 right-0 w-[620px] pt-10"
          />
        </div>
        {/* mobile */}
        <div className="image w-full md:w-1/3 md:hidden">
          <img
            src={globe}
            alt=""
            className="w-2/3 absolute bottom-12 right-10 z-[3]"
          />
          <img src={heroImg} alt="" className="w-full" />
        </div>
      </div>
      {/* gradient */}
      <div className="absolute z-[1] w-[22%] h-[22%] top-8 left-40 pink__gradient" />
      <div className="absolute z-[0] w-[15%] h-[15%] rounded-full white__gradient top-8 left-40" />

      {/* gradient */}
      <div className="absolute z-[2] w-[22%] h-[22%] top-44 right-20 pink__gradient" />
      {/* <div className="absolute z-[1] w-[15%] h-[15%] rounded-full white__gradient bottom-28" /> */}
    </header>
  );
};

export default Hero;
