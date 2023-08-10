import React from "react";
import AddStudent from "../../components/AddStudent";
import image1 from "../../images/image1.avif";
import image2 from "../../images/image2.avif";
import image3 from "../../images/image3.avif";
import image4 from "../../images/image4.avif";

export default function About() {
  return (
    <main>
      <div className="header-area">
        <h1>About Us</h1>
        <h2>The Rising Sun College</h2>
        <div className="image-container">
          <img src={image4} alt="" className="image-size" />
        </div>
      </div>

      <div className="mission-container">
        <div className="statement">
          <h4>Our Vision</h4>
          <p>
            A world where education will not be seen as luxury but a necessity
            for all.
          </p>
        </div>

        <div className="statement">
          <h4>Our Mission</h4>
          <p>
            To improve global access to quality education and tutors through the
            deployment of cost-effective educational based apps and
            technologies.
          </p>
        </div>
      </div>

      <div className="mission-container">
        <div className="statement">
          <h4>Our Clients</h4>
          <p>
            Professionals who are looking for schools that will allow them have
            peace of mind at work. We are a school where parents can concentrate
            on their jobs knowing fully well very capable hands are taking care
            of their children.
          </p>
        </div>

        <div className="statement">
          <h4>Our Core Values</h4>
          <p>Honesty, hardwork and perseverance.</p>
        </div>
      </div>
      {/* 
      <label htmlFor="mission">Mission Statement:</label>
      <textarea
        id="mission"
        rows="4"
        cols="50"
        className="mission-textarea"
        defaultValue="Our mission is to..."
      ></textarea> */}

      <div className="image-container">
        <div>
          <img src={image1} alt="" className="size-image" />
          <h3>Chidi Ononye - co-founder</h3>
        </div>

        <div>
          <img src={image2} alt="" className="size-image" />
          <h3>Qasim Aswan - co-founder</h3>
        </div>

        <div>
          <img src={image3} alt="" className="size-image" />
          <h3>Bernad Jaggart - co-founder</h3>
        </div>
      </div>
      <div>
        <div className="schoollink">
          <a href="https://github.com/">github</a>
        </div>
      </div>
    </main>
  );
}
