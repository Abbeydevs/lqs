import vidPlaceholder from "../../images/vid-placeholder.png";

import "./features.css";

const Features = () => {
  return (
    <div className="container">
      <div className="feature-card">
        <img src={vidPlaceholder} alt="Video placeholder" />
        <div className="contents">
          <h1>LQS is for your Family</h1>
          <div className="flex-contents">
            <div className="stroke"></div>
            <span>
              <p>
                “We understand the importance of looking after loved ones. It
                means everything to us - just as it means everything to our
                customers.
              </p>
              <p>
                Caring for our clients is at the heart of everything we do.
                Showing compassion and kindness to our clients and each other
                will ensure we are well led and deliver safe care every day.
              </p>{" "}
              <p>
                We believe in always treating everyone with dignity and respect
                and we adopt a person-centred approach.”
              </p>
              <p>
                Matha Lewry, <strong>Manager & Nominated Individual</strong>
              </p>
            </span>
          </div>
          <button className="btn secondary-btn">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
