import React from "react";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import GeStarted from "../components/GetStarted/GeStarted";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GeStarted />
    </div>
  );
};

export default Website;
