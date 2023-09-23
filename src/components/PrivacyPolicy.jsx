import { Btn } from "./index";
import { BsCheck } from "react-icons/bs";
import img1 from "../assets/lock.png";
import img2 from "../assets/Vector.png";

const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 space-x-0 md:space-x-16">
        <div className="content w-full md:w-1/2 z-10">
          <h3 className="heading__3 clash700">
            Privacy Policy and <br />
            <span className="text-lightPurple">Terms</span>
          </h3>
          <p className="md:-mt-6 font-Montserrat text-center md:text-left text-white75 text-sm mb-4 md:mb-6">
            Last updated on September 12, 2023
          </p>

          <p className="paragraph__2 md:pr-8">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div className="box border-lightPurple border rounded-lg p-8 md:p-10 my-4 mt-8 md:mt-20">
            <p className="paragraph__2">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h5 className="text-lightPurple font-bold font-Montserrat text-base my-4">
              Licensing Policy
            </h5>
            <p className="font-bold font-Montserrat text-sm text-primary my-2 mb-8 md:mb-0">
              Here are terms of our Standard License:
            </p>
            <div className="flex flex-col space-y-4 my-4 mb-10">
              <div className="flex space-x-4 items-start">
                <div className="w-10 h-6 rounded-full bg-green-600">
                  <BsCheck className="text-primary text-2xl" />
                </div>
                <p className="paragraph__2_">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex space-x-4 items-start">
                <div className="w-10 h-6 rounded-full bg-green-600">
                  <BsCheck className="text-primary text-2xl" />
                </div>
                <p className="paragraph__2_">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
            <Btn text="Read More" link="/" />
          </div>
        </div>
        <div className="image w-full md:w-1/2">
          <img src={img1} alt="" className="" />
        </div>
        <img src={img2} alt="" className="absolute top-0 right-16 w-1/3" />
      </div>
      {/* left gradient */}
      <div className="absolute z-[1] w-[20%] h-[22%] bottom-0 left-0 pink__gradient" />
      <div className="absolute z-[0] w-[10%] h-[10%] rounded-full white__gradient bottom-0" />
    </section>
  );
};

export default PrivacyPolicy;
