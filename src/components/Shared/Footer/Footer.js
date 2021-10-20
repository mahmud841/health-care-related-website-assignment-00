import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <div>
            <p>Our Services</p>
          </div>
          <div>
            <small>Emergency Patients Care</small>
            <br />
            <small>Surgery Department</small>
            <br />
            <small>Treatment Personal Diseases</small>
            <br />
            <small>Medicine Department </small>
            <br />
            <small>Cardiology Department</small>
          </div>
        </div>
        <div>
          <div>
            <p> Dental Health</p>
          </div>
          <div>
            <small>Emergency Dental Care</small>
            <br />
            <small>Check Up</small>
            <br />
            <small>Treatment of Personal Diseases</small>
            <br />
            <small>Tooth Extraction</small>
            <br />
            <small>Check Up</small>
          </div>
        </div>
        <div>
          <div>
            <p>Our Address</p>
          </div>
          <div>
            <small>Dhaka,Bangladesh</small>
            <div className="brandIcon">
               <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faGooglePlusG} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <small>Call Now +8801338164898</small>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <small>Copyright 2021 || All Right Reserved</small>
      </div>
    </div>
  );
};

export default Footer;