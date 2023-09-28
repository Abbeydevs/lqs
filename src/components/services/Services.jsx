import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import serviceCard from "./service-data";

import "./services.css";

const Services = ({ title }) => {
  return (
    <div className="container service-container">
      <h1>{title}</h1>
      <div className="services-column">
        {serviceCard.map(({ title, description, link }) => {
          return (
            <div className="card">
              <h4>{title}</h4>
              <p>{description}</p>
              <Link to={link}>
                <p className="link">
                  <span>Learn more</span> <RxExternalLink />
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
