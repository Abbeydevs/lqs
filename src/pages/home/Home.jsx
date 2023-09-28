import Clients from "../../components/clients/Clients";
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";
import MissionStatements from "../../components/mission-statements/MissionStatements";
import Services from "../../components/services/Services";
import Strive from "../../components/strive/Strive";
import Goal from "../../components/goal/Goal";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Services title="Our Services" />
      <Features />
      <Strive />
      <MissionStatements />
      <Goal />
    </>
  );
};

export default Homepage;
