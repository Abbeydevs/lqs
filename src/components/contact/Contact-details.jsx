import clientPic from "../../images/contact-img.png";
import contacts from "./contact-data";
import "./cd.css";

const ContactDetails = () => {
  return (
    <div className="container cd-container">
      <img src={clientPic} alt="Clients illustrations" />
      <div className="details">
        {contacts.map(({ icon, contact, details }) => {
          return (
            <div className="dt-items" key={contact}>
              <h3>{contact}</h3>
              <p>{details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactDetails;
