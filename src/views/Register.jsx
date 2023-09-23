import { Nav, Modal } from "../components";
import img from "../assets/reg.png";
import axios from "axios";
import { useEffect, useState } from "react";

const Register = () => {
  const [teamName, setTeamName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [category, setCategory] = useState(1);
  const [groupSize, setGroupSize] = useState(1);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [fetchedCategories, setfetchedCategories] = useState([]);

  const [sending, setSending] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => {
        setfetchedCategories(response.data);
        console.log(fetchedCategories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const requestData = {
      team_name: teamName,
      phone_number: phoneNumber,
      email: email,
      project_topic: projectTopic,
      category: category,
      group_size: groupSize,
      privacy_policy_accepted: privacyPolicy,
    };

    try {
      const response = await axios.post(
        "https://backend.getlinked.ai/hackathon/registration",
        requestData
      );

      setSending(false);

      console.log("Response:", response.data);

      // clear the input fields
      setTeamName("");
      setPhoneNumber("");
      setEmail("");
      setProjectTopic("");
      setCategory(1);
      setGroupSize(1);
      setPrivacyPolicy(false);

      setIsModalOpen(true);
    } catch (error) {
      setSending(false);

      // Clear the input fields
      setTeamName("");
      setPhoneNumber("");
      setEmail("");
      setProjectTopic("");
      setCategory(1);
      setGroupSize(1);
      setPrivacyPolicy(false);
      console.error("Error:", error);

      console.log(
        teamName,
        phoneNumber,
        email,
        projectTopic,
        category,
        groupSize,
        privacyPolicy
      );
    }
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <main className="h-full py-2 md:py-0 md:pb-4 relative">
      <Nav />
      <section className="container mx-auto md:px-20 py-0 ">
        <div className="flex flex-col items-center justify-between md:flex-row space-y-10 md:space-y-0">
          <div className="content hidden md:block w-full md:w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="form w-full md:w-1/2 shadow">
            <p className="clash700 font-bold text-[20px] leading-[24px] text-lightPurple mb-4">
              Register
            </p>

            <img src={img} alt="" className="md:hidden" />

            <p className="font-Montserrat font-normal text-[12px] leading-[14px] text-primary mb-4 pr-28">
              Be part of this movement!
            </p>

            <h4 className="font-normal font-Montserrat text-[24px] leading-[29.26px] text-primary mb-8">
              CREATE YOUR ACCOUNT
            </h4>

            <form className="form" onSubmit={handleSubmit}>
              <div className="row flex flex-col md:flex-row space-x-2">
                <div className="left__input w-full md:w-1/2">
                  <label htmlFor="teamName" className="form__label">
                    Team’s Name
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    placeholder="Enter the name of your group"
                    id="teamName"
                    name="team_name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                </div>
                <div className="right__input w-full md:w-1/2">
                  <label htmlFor="phoneNumber" className="form__label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full"
                    placeholder="Enter your phone number"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              {/* email & project topic  */}
              <div className="row flex flex-col md:flex-row space-x-2">
                <div className="left__input w-full md:w-1/2">
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full"
                    placeholder="Enter your email address"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="right__input w-full md:w-1/2">
                  <label htmlFor="projectTopic" className="form__label">
                    Project Topic
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    placeholder="What is your group project topic"
                    id="projectTopic"
                    value={projectTopic}
                    onChange={(e) => setProjectTopic(e.target.value)}
                  />
                </div>
              </div>
              {/* category & group size  */}
              <div className="row flex space-x-2">
                <div className="left__input w-full md:w-1/2">
                  <label htmlFor="category" className="form__label">
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Select your category"
                  >
                    {fetchedCategories &&
                      fetchedCategories.map((i) => (
                        <option value={i.id} key={i.name}>
                          {i.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="right__input w-full md:w-1/2">
                  <label htmlFor="size" className="form__label">
                    Group Size
                  </label>
                  <select
                    name="groupSize"
                    id="groupSize"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <p className="font-normal font-Montserrat italic text-lightPurple text-xs mb-4">
                Please review your registration details before submitting
              </p>
              <div className="checkbox flex items-center space-x-4 mb-4">
                <input
                  type="checkbox"
                  name="policy"
                  className=""
                  value={privacyPolicy}
                  onChange={(e) => setPrivacyPolicy((prev) => !prev)}
                />
                <span className="font-normal font-Montserrat text-xs text-primary">
                  I agreed with the event terms and conditions and privacy
                  policy
                </span>
              </div>
              <div className="text-center">
                <button className="gradient block text-primary font-Montserrat font-normal text-base p-2 px-8 rounded w-full">
                  {sending ? "Submitting..." : "Register Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* top gradient */}
      <div className="absolute z-[0] w-[15%] h-[22%] top-44 left-40 pink__gradient" />
      {/* <div className="absolute z-[0] w-[15%] h-[15%] rounded-full white__gradient top-0" /> */}
      {/* right gradient */}
      <div className="hidden md:block absolute z-[0] w-[22%] h-[40%] -bottom-10 -right-44 pink__gradient" />
      <div className="hidden md:block absolute z-[0] w-[10%] h-[10%] rounded-full white__gradient bottom-0 right-0" />

      {/* modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default Register;
