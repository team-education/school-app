import React from "react";
import Hero from "../../components/hero/Hero";
import { Helmet } from "react-helmet-async";

export default function Home() {
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
      <main>
        <Hero />
        <h2>this is the home page</h2>
        <p>This is done for the 301 project</p>
      </main>
    </>
  );
}
