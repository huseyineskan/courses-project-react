import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerLeftBox">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:hej@courses.se">hej@courses.se</a>
            </li>
            <li>
              <a href="mailto:hej@courses.se">+46 70 123 00 00</a>
            </li>
          </ul>
        </div>
        <div id="copyright">
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
