import React from "react";
import Languages from "./languages/Languages";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import FeaturedProjects from "./featured-projects/FeaturedProjects";
import AboutMe from "./about-me/AboutMe";

const HomePage = () => {
  return (
    <>
      <AboutMe />
      <Languages />
      <Services />
      <FeaturedProjects />
      <Contact />
    </>
  );
};

export default HomePage;
