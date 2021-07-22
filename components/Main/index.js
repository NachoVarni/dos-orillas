import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "../About";
import Explain from "../Explain";
import Work from "../Work";
import Budget from "../Budget";
import Contact from "../Contact";
import ContactButton from "../ContactButton";

function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Explain />
      <Work />
      <Budget />
      <Contact />
      <ContactButton />
    </>
  );
}

export default Main;
