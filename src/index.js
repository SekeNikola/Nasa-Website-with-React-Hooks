import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Apod from "./components/Apod";
import Asteroids from "./components/Asterodis";
import "./assets/css/index.scss";

ReactDOM.render(
  <>
    <Header />
    <Apod />
    <Gallery />
    <Asteroids />
  </>,
  document.getElementById("root")
);
