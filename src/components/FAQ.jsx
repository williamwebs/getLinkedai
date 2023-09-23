import { useState } from "react";
import image from "../assets/faq.png";
import { faq } from "../constants";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const handleChange = (faq) => {
    setSelectedFaq(faq);
  };

  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 space-x-0 md:space-x-16">
        <div className="content w-full md:w-2/5">
          <h3 className="heading__3">
            Frequently Ask
            <br />
            <span className="text-lightPurple">Question</span>
          </h3>
          <p className="paragraph__2 md:pr-16 mb-4 md:-mt-4">
            We got answers to the questions that you might want to ask about
            <span className="font-bold"> getlinked Hackathon 1.0</span>
          </p>

          {/* accordion */}
          {faq.map((i) => {
            const isOpen = selectedFaq === i;
            return (
              <div
                className="single__faq border-b border-lightPurple my-2 py-3"
                key={i.title}
              >
                <input
                  type="radio"
                  name="faq"
                  id={i.title}
                  className="hidden"
                  onChange={() => handleChange(i)}
                  checked={isOpen}
                />
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={i.title}
                    className="paragraph__2_ cursor-pointer"
                  >
                    {i.title}
                  </label>
                  {isOpen ? (
                    <label htmlFor={i.title}>
                      <AiOutlineMinus className="font-normal text-lightPurple cursor-pointer" />
                    </label>
                  ) : (
                    <label htmlFor={i.title}>
                      <AiOutlinePlus className="font-normal text-lightPurple cursor-pointer" />{" "}
                    </label>
                  )}
                </div>

                {isOpen && (
                  <div className="block">
                    <p className="paragraph__2">{i.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="image w-full md:w-3/5">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
