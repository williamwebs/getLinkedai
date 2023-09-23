import { useState } from "react";
import { Nav } from "../components";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const requestData = {
      email: email,
      phone_number: phoneNumber,
      first_name: firstName,
      message: message,
    };

    try {
      const response = await axios.post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        requestData
      );
      setSending(false);

      setEmail("");
      setFirstName("");
      setMessage("");
      setPhoneNumber("");

      console.log("Response:", response.data);

      // clear the input fields
    } catch (error) {
      setSending(false);

      // Clear the input fields

      console.error("Error:", error);
    }
  };

  return (
    <main className="h-screen py-2 md:py-0 relative">
      <Nav />
      <section className="container mx-auto md:px-20 py-0 mt-0 md:mt-[70px] ">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0">
          <div className="content hidden md:block w-full md:w-1/3">
            <h3 className="heading__3_">Get in touch</h3>
            <p className="font-Montserrat font-normal text-[16px] leading-[19.5px] text-primary">
              Contact <br /> Information
            </p>
            <p className="font-Montserrat font-normal text-[16px] leading-[19.5px] text-primary mt-8">
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>
            <p className="font-Montserrat font-normal text-[16px] leading-[19.5px] text-primary mt-8">
              Call Us : <a href="tel:07067981819"> 07067981819</a>
            </p>
            <p className="font-Montserrat font-normal text-[16px] leading-[19.5px] text-primary mt-8">
              we are open from Monday-Friday <br /> 08:00am - 05:00pm
            </p>
            <p className="font-Montserrat font-normal text-[16px] leading-[19.5px] text-lightPurple mt-8">
              Share on
            </p>
          </div>
          <div className="form w-full md:w-2/3 shadow">
            <p className="font-Unica font-bold text-[20px] leading-[24px] text-lightPurple">
              Questions or need assistance?
            </p>
            <p className="font-Unica font-bold text-[20px] leading-[24px] text-lightPurple mb-8">
              Let us know about it!
            </p>

            <p className="font-Montserrat md:hidden font-normal text-[12px] leading-[14px] text-primary mb-10 pr-28">
              Email us below to any question related to our event
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="email"
                placeholder="Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="text-center">
                <button className="gradient inline-block text-primary font-Montserrat font-normal text-base p-2 px-8 rounded w-fit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* top gradient */}
      <div className="absolute z-[0] w-[15%] h-[25%] top-44 left-10 pink__gradient" />
      {/* right gradient */}
      <div className="hidden md:block absolute z-[0] w-[22%] h-[40%] -bottom-10 -right-44 pink__gradient" />
      <div className="hidden md:block absolute z-[0] w-[10%] h-[10%] rounded-full white__gradient bottom-0 right-0" />
    </main>
  );
};

export default Contact;
