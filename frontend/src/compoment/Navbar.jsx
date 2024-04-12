import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <section className="header">
        <Link to="/" className="logo" onClick={() => navigate("/")}>
          JKTravel.
        </Link>
        <nav
          className={isMobile ? "navbar-mobile" : "navbar"}
          onClick={() => setIsMobile(false)}
        >
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="/about">
            About
          </Link>
          <Link className="a" to="/package">
            Package
          </Link>
          <Link className="a" to="/book">
            Book
          </Link>
          <Link className="a" to="/Login">
            Login
          </Link>
          <Link className="a" to="/signup">
            SignUp
          </Link>

        </nav>

        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
          {isMobile ? (
            <FontAwesomeIcon icon={faXmark} size="sm"  />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xs"  />
          )}
        </button>
      </section>
    </div>
  );
}

export default Navbar;
