import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="FooterTop">
        <div className="Address">
          <p>Tek School</p>
          <p> Street Name</p>
          <p>City</p>
          <p>Post Code</p>
        </div>
        <div className="Tel">
          <p>Tel: 01603 888 7755</p>
          <p>Head Teacher:M Xxx Yyyy</p>
        </div>
        <div className="SocialMedia">
          <p> Social Media goes here</p>
        </div>
      </div>
    </footer>
  );
}
