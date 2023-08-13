import React from "react";
import "./Footer.css";
import logo from "../../assets/real-estate3.jpeg";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-ctn layout">
        <div className="footer-left">
          <div className="ft-details-top">
            <img src={logo} width={122} height={90} alt="" />
            <div className="ft-wrap">
              <p>Real Estate Hungary.</p>
              <p>3525 Miskolc</p>
              <p>Arany János utca 25.</p>
            </div>
          </div>
          <div className="ft-details-bottom">
            <p>T: 06 202804925</p>
            <p>E: hills_id@yahoo.com</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-box">
            <h4>Menu Links</h4>
            <hr />
            <p>Home</p>
            <p>About</p>
            <p>Agents</p>
            <p>Properties For Rent</p>
            <p>Properties For Sale</p>
            <p>Apply to be an agent</p>
          </div>
          <div className="footer-right-box">
            <h4>Properties For Rent</h4>
            <hr />
            <p>Debrecen</p>
            <p>Szeged</p>
            <p>Miskolcs</p>
            <p>Pecs</p>
            <p>Gyor</p>
            <p>Kecskemet</p>
          </div>

          <div className="footer-right-box">
            <h4>Additional</h4>
            <hr />
            <p>Login/Register</p>
            <p>Buyers</p>
            <p>Sellers</p>
            <p>News</p>
            <p>Contact</p>
            <p>Disclaimer</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div style={{ textAlign: "center" }}>
        2023 Real-Estate © All rights reserved. |  Estates Kft.
      </div>
    </div>
  );
};

export default Footer;
