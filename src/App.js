import "./App.css";
import React from "react";
import Header from "./compoment/header/Header";
import About from "./compoment/about/About";
import Contact from "./compoment/contact/Contact";
import Experience from "./compoment/experience/Experience";

import Nav from "./compoment/nav/Nav";
import { findAllByDisplayValue } from "@testing-library/react";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Contact />
      <Experience />
    </>
  );
};

export default App;
