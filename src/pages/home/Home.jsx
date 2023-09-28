import Clients from "../../components/clients/Clients";
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";
import MissionStatements from "../../components/mission-statements/MissionStatements";
import Services from "../../components/services/Services";
import Strive from "../../components/strive/Strive";
import Goal from "../../components/goal/Goal";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Features />
      <Strive />
      <MissionStatements />
      <Goal />
      <Footer />
    </>
  );
};

export default Homepage;
