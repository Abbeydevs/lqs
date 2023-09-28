import ladyStrive from "../../images/featured-img.png";

import "./strive.css";

const Strive = () => {
  return (
    <div className="container">
      <div className="blue-card">
        <div className="bc-contents">
          <h1>Strive for Excellence</h1>
          <p>
            LQS (Life Quality Service) strives to offer excellent and affordable
            home care services to individuals and families in and around West
            Sussex.
          </p>
          <button className="btn secondary-btn">Learn more</button>
        </div>
        <img src={ladyStrive} alt="" />
      </div>
    </div>
  );
};

export default Strive;
