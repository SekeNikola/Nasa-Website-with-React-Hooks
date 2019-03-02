import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css//apod.scss";

const Apod = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=8OFVBXLQrAKgiDBhhdzPRNXwVNicaUie7yQRJYFE"
      )
      .then(result => setData(result.data));
  }, []);

  return (
    <div className="container text-center mb-3">
      <h2>Photo Of the Day</h2>
      <div className="apod">
        <div className=" apod-img">
          <a href="https://apod.nasa.gov/apod/image/1903/rolando-ligustri-C2018Y1_190227_FB_1551288721_800.jpg">
            <img src={data.hdurl} alt="" />
          </a>
        </div>
        <div className=" apod-description">
          <h3>{data.title}</h3>
          <p className="text-white">{data.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Apod;
