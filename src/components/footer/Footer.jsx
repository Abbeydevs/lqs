import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

import "./footer.css";

const Footer = () => {
  const date = new Date();
  const getCurrentDate = date.getFullYear();

  return (
    <div className="container ft-container">
      <div className="footer-contents">
        <div className="lqs-details">
          <img src={logo} alt="Company Brand" />
          <p>
            At LQS Health care service limited, we are a docimiliary care
            provider that provides vetted carers to extra care/nursing homes and
            individuals who require assisstance in their own homes
          </p>
        </div>
        <div className="useful-links grid-col-link">
          <h4>Useful Links</h4>
          <Link to="/">Recruitments</Link>
          <Link to="/">FAQs</Link>
          <Link to="/">Reviews</Link>
          <Link to="/">LQS Team</Link>
        </div>
        <div className="socials grid-col-link">
          <h4>Socials</h4>
          <Link to="/">Facebook</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">Twitter</Link>
          <Link to="/">Youtube</Link>
        </div>
        <div className="legal grid-col-link">
          <h4>Legal</h4>
          <Link to="/">Terms of Service</Link>
          <Link to="/">Privacy</Link>
        </div>
      </div>
      <div className="divider"> </div>
      <div className="footer-copyrights">
        <p>Copyright {getCurrentDate} LQS. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
