import martha from "../../images/martha.png";
import "./gallery.css";

import gallery from "./gallery-data";

const Gallery = () => {
  return (
    <div className="container">
      <div className="card t-card">
        <h1>Hands-on Management Team</h1>
        <p>
          We are proud of our fantastic hands-on management team. We love to be
          out and about visiting LQS Healthcare Clients and supporting our team
          of outstanding CareGivers. From the top-down and bottom-up we
          encourage all employees to find ways to make work fun and spread a
          little happiness to Kingsway Care Clients too.
        </p>
      </div>
      <div className="gallery-grid">
        {gallery.map(({ img, name, occupation }) => {
          return (
            <div>
              <img src={img} alt="Martha" />
              <h4>{name}</h4>
              <p>{occupation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
