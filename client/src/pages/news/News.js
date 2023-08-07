import React from "react";
import { Helmet } from "react-helmet-async";
import "./News.css";

export default function News() {
  return (
    <>
      <Helmet>
        <title> School Website</title>
        <meta
          name="description"
          contents="This is the home page for my website"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="News">
        <h1>News</h1>
        <p> News News</p>
      </div>
    </>
  );
}
