import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import "./assets/css/index.scss";

ReactDOM.render(
  <>
    <Header />
    <Gallery />
  </>,
  document.getElementById("root")
);
