import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <Link to="/">
          <img src="" alt="Company Logo" />
        </Link>
        <div className="nav-links">
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/the-team">LQS Team</Link>
            <Link to="/services">Care Services we provide</Link>
            <Link to="/review">Review</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="nav-divider"></div>
          <div>
            <Link to="/">
              <button className="btn outline-btn">
                <div className="icon-style">
                  <BiPhoneCall className="icon" />
                </div>
                01903930455
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
