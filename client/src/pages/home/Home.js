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
      <main>
        <Main />
        <h2>this is the home page</h2>
        <p>This is done for the 301 project</p>
      </main>
    </>
  );
}
