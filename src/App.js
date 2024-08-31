import React from "react";
import { Cta, Navbar } from "./components";
import {
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        {/* <Brand /> */}
      </div>
      <div className="gradient__bg-1">
        <WhatGPT3 />
        <Features />
        <Possibility />
      </div>
      <Cta />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
};

export default App;
