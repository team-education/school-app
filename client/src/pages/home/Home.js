import React from "react";
import Main from "../../components/main/Main";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title> School Website</title>
        <meta
          name="description"
          contents="This is the home page for our school website"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="main1">
        <div className="item1">
          <Main />
        </div>
        <div className="item2"></div>
      </main>
    </>
  );
}
