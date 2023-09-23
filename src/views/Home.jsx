import {
  Criteria,
  FAQ,
  Footer,
  Hero,
  Introduction,
  Nav,
  PrivacyPolicy,
  Rewards,
  Rules,
  Sponsors,
  Timeline,
} from "../components";

import "../index.css";

const Home = () => {
  return (
    <main className="">
      <div className="">
        <Nav />
        <hr />
        <Hero />
        <hr />
        <Introduction />
        <hr />
        <Rules />
        <hr />
        <Criteria />
        <hr />
        <FAQ />
        <hr />
        <Timeline />
        <hr />
        <Rewards />
        <hr />
        <Sponsors />
        <hr />
        <PrivacyPolicy />
        <hr />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
