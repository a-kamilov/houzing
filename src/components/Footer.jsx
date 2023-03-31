import React from "react";
import logo from "./img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div className="section_1">
          <ul>
            <li>
              <h4>Contact Us</h4>
            </li>
            <li className="us">
              <i class="fas fa-map-marker-alt"></i>329 Queensberry Street, North
              Melbourne VIC 3051, Australia.
            </li>
            <li className="us">
              <i class="fa-solid fa-phone"></i>123 456 7890
            </li>
            <li className="us">
              <i class="fa-solid fa-envelope"></i>support@houzing.com
            </li>
            <li className="social_media">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fa-brands fa-pinterest"></i>
            </li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li>
              <h4>Discover</h4>
            </li>
            <li>
              <a href="#">Chicago</a>
            </li>
            <li>
              <a href="#">Los Angeles</a>
            </li>
            <li>
              <a href="#">Miami</a>
            </li>
            <li>
              <a href="#">New York</a>
            </li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li>
              <h4>Lists by Category</h4>
            </li>
            <li>
              <a href="#">Apartments</a>
            </li>
            <li>
              <a href="#">Condos</a>
            </li>
            <li>
              <a href="#">Houses</a>
            </li>
            <li>
              <a href="#">Offices</a>
            </li>
            <li>
              <a href="#">Retail</a>
            </li>
            <li>
              <a href="#">Villas</a>
            </li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li>
              <h4>Lists by Category</h4>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="privacy">
        <a href="#">
          <img src={logo} />
          Houzing
        </a>
        <p>Copyright &copy; 2021 CreativeLayers. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
