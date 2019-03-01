import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Apod from "./components/Apod";
import "./assets/css/index.scss";

ReactDOM.render(
  <>
    <Header />
    <Apod />
    <Gallery />
  </>,
  document.getElementById("root")
);
