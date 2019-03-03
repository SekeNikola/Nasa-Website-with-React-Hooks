import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/gallery.scss";
const Gallery = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://images-assets.nasa.gov/popular.json`)
      .then(result => setData(result.data.collection.items));
  }, []);
  const findImage = e => {
    axios
      .get(`https://images-api.nasa.gov/search?q=${search}`)
      .then(result => setData(result.data.collection.items));
  };
  console.log(data);

  return (
    <div className="container text-center">
      <h2>Find Images</h2>
      <p>Search for images in our database</p>
      <input
        className="mb-3"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for images"
        onKeyPress={e => {
          if (e.key === "Enter") {
            findImage();
          }
        }}
      />
      <button type="submit" className="btn" onClick={findImage}>
        Search
      </button>
      <div
        className="search_images"
        style={{ columnCount: "4", columnWidth: "150px" }}
      >
        {data.map((item, i) => {
          if (i <= 16) {
            return (
              <a href={item.links[0].href} key={item.data[0].nasa_id}>
                <img className="img-fluid" src={item.links[0].href} alt="" />
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Gallery;
