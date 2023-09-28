import { Link } from "react-router-dom";
import serviceCard from "./service-data";

import "./services.css";

const Services = ({ title, links }) => {
  return (
    <div className="container service-container">
      <h1>{title}</h1>
      <div className="services-column">
        {serviceCard.map(({ title, description, url, icon }) => {
          return (
            <div className="card">
              <h4>{title}</h4>
              <p>{description}</p>
              <Link to={url}>
                <p className="link">
                  {links}
                  {icon}
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
