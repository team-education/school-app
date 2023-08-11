import React from "react";
import AddStudent from "../../components/AddStudent";
import image1 from "../../images/image1.avif";
import image2 from "../../images/image2.avif";
import image3 from "../../images/image3.avif";
import image6 from "../../images/image6.avif";
import image7 from "../../images/image7.avif";
import image8 from "../../images/image8.avif";
import image9 from "../../images/image9.avif";
export default function About() {
  return (
    <main>
      <div className="header-area">
        <h1 className="header-name">The Rising Sun College</h1>
        <div className="image-container">
          <img src={image6} alt="" className="size-image with-border" />
          <img src={image7} alt="" className="size-image with-border" />
          <img src={image8} alt="" className="size-image with-border" />
          <img src={image9} alt="" className="size-image with-border" />
          {/* <img src={image1} alt="" className="size-image with-border" /> */}
        </div>
      </div>
      <div className="body">
        <div className="mission-vision">
          {/* <div className="statement"> */}
          <h4 className="vision-statement">Our Vision</h4>
          <p className="vision-content">
            To help create a world education will not be seen as a global luxury
            but as a fundamental necessity for all.
          </p>

          <h4 className="mission-statement">Our Mission</h4>
          <p className="mission-content">
            To improve global access to quality education and tutors through the
            deployment of cost-effective educational based apps and
            technologies.
          </p>
        </div>

        <div className="clients-values">
          <h4 className="client-statement">Our Clients</h4>
          <p className="client-content">
            We work with very busy parents who are interested in the best outcomes
            any school can possible provide for children. These are parents who wish to concentrate fully well at work knowing that the best hands are looking after their children.
          </p>

          <h4 className="core-value">Our Core Values</h4>
          <p className="core-value-content">
            We value honesty;
            <div>We work smart and hard;</div>
            We persevere
          </p>
        </div>
      </div>
      <div className="image-container">
        <div>
          <img src={image1} alt="" className="size-image with-border" />
          <h3 className="founder-name">Chidi Ononye - CEO</h3>
        </div>

        <div>
          <img src={image2} alt="" className="size-image with-border" />
          <h3 className="founder-name">Qasim Aswan - CTO</h3>
        </div>

        <div>
          <img src={image3} alt="" className="size-image with-border" />
          <h3 className="founder-name">Bernad Jaggart - CFO</h3>
        </div>
      </div>{" "}
    </main>
  );
}
