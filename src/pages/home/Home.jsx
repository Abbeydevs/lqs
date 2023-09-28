import Clients from "../../components/clients/Clients";
import Features from "../../components/features/Features";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Features />
    </>
  );
};

export default Homepage;
