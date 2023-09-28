import "./hero.css";
import heroImage from "../../images/hero-front-bg.png";

const Hero = () => {
  return (
    <div className="container hero-container">
      <div className="texts">
        <h1>
          Dependable <span>Healthcare Provider</span>
        </h1>
        <p>
          Our focus is to build a reputation as an outsatanding home care
          service provider, who support independent living across England.
        </p>
        <button className="btn primary-btn">Contact us</button>
      </div>
      <div className="img">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
