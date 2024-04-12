import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight , faPhone ,faEnvelope, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook ,faTwitter ,faInstagram ,faLinkedin} from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (
    <div>
      <section
        class="footer"
        
      >
        <div class="box-container">
          <div class="box">
            <h3>Quick Links</h3>
            <Link className="a" to="/">
            <FontAwesomeIcon className="i" icon={faAngleRight}/>Home
            </Link>
            <Link className="a" to="/about">
            <FontAwesomeIcon className="i" icon={faAngleRight} />About
            </Link>
            <Link className="a" to="/package">
            <FontAwesomeIcon className="i" icon={faAngleRight} />Package
            </Link>
            <Link  className="a" to="/book">
            <FontAwesomeIcon className="i" icon={faAngleRight}  />Book
            </Link>
          </div>

          <div class="box">
            <h3>Extra Links</h3>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faAngleRight} />Need Help?
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faAngleRight} />About Us
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faAngleRight} />Privacy Policy
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faAngleRight} />Terms of Use
            </Link>
          </div>

          <div class="box">
            <h3>Contact Info</h3>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faPhone} />+123-456-7890
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faPhone} />+111-222-3333
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faEnvelope} />travel@gamil.com
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faMapLocationDot} />Bihar, India - 841231
            </Link>
          </div>

          <div class="box">
            <h3>Contact Info</h3>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faFacebook} />Facebook
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faTwitter} />Twitter
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faInstagram} />Instagram
            </Link>
            <Link className="a" to="#">
            <FontAwesomeIcon className="i" icon={faLinkedin} />Linkedin
            </Link>
          </div>
        </div>

        <div class="footer-text">
          Created By <span>Juli Kumari</span> | All Rights Reserved!
        </div>
      </section>
    </div>
  );
}

export default Footer;
