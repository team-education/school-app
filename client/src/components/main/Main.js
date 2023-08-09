import React from "react";
import "./Main.css";
import CustomCarousel from "../carousel/Carousel";

export default function Main() {
  return (
    <>
      <div className="Main">
        <div className="Carousel">
          <CustomCarousel />
        </div>
        <div className="MainText">
          <h2>School is in need of a new website for two reasons:</h2>
          <ul>
            <li>Information dissemination</li>
            <li>
              To replace current, mainly paper-based systems with an online
              mobile-friendly system (for application, student reports, teacher
              reports, news)
            </li>

            <li>
              One area of website is for public access and the other is access
              restricted based on priviledges (student, parent, teacher,
              administrator)
            </li>
          </ul>
          <h2>Minimum Viable Product</h2>
          <ul>
            <li>
              <h3>Front-end:</h3>
              <p>
                CSS styled front page with 4 navigation bars: About us, Contact
                Us and News. School news is diplayed in News page. Pages
                rendered to Netlify.
              </p>
            </li>
            <li>
              <h3>Back-end</h3>
              <p>
                CRUD for Attendance register;Student/Treacher Register;News via
                MongoDB database.
              </p>
            </li>
            <li>
              <h3>Stretch goals:</h3>
              <p>
                Access control for each level, Student, Parent, Teacher,
                Administrator using AUTH0 or similar
              </p>
              <p>Separate page for feeding information and display</p>
            </li>
            <li>
              <h3>Team</h3>
              <p>Chidi Ononye</p>
              <p>Qasim Aswan</p>
              <p>Bernard Fernando</p>
            </li>
            <li>
              Thanks so much all Teaching Staff and non teaching staff. Without
              the teaching staff, this would have not gone even to the Trello
              board. Thanks so much for your able guidance, support and SUPPORT
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
