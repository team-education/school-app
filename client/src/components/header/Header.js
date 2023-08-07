import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className="Sign">
          <h1>Tech Ed School</h1>
        </div>
      </Link>
      <nav>
        <ul className="Nav-butt">
          <li>
            <Link to={"/"}>
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
