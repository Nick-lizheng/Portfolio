import React from "react";
import Header from "./compoment/header/Header";
import Nav from "./compoment/nav/Nav";
import About from "./compoment/about/About";
import Contact from "./compoment/contact/Contact";
import Experience from "./compoment/experience/Experience";
import Testimonial from "./compoment/testimonials/Testimonials";
import Servics from "./compoment/services/Servics";
import Portfolio from "./compoment/portfolio/Portfolio";
import Footer from "./compoment/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Servics />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
