import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import logo from "../../images/logo.png";
import { Squeeze as Hamburger } from "hamburger-react";

import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="nav-container">
      <nav className="navigation">
        <Link to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
        <div className="nav-links">
          <div className={mobileNav ? "links open" : "links"}>
            <Link to="/">Home</Link>
            <Link to="/the-team">LQS Team</Link>
            <Link to="/services">Care Services we provide</Link>
            <Link to="/review">Review</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="nav-divider"></div>
          <div>
            <Link to="tel:+4401903930455">
              <button className="btn outline-btn">
                <div className="icon-style">
                  <BiPhoneCall className="icon" />
                </div>
                01903930455
              </button>
            </Link>
          </div>
        </div>
        <div className="nav-toggle" onClick={handleMobileNav}>
          <Hamburger size={25} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
