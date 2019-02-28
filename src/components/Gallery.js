import React, { useState } from "react";
import axios from "axios";
import "../assets/css/gallery.scss";
const Gallery = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const findImage = () => {
    axios
      .get(`https://images-api.nasa.gov/search?q=${search}`)
      .then(result => setData(result.data.collection.items));
  };
  console.log(data);

  return (
    <div className="container text-center">
      <h2>Find Images</h2>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for images"
      />
      <button type="submit" className="btn" onClick={findImage}>
        Search
      </button>
      <div className="search_images">
        {data.map((item, i) => {
          if (i <= 11) {
            return (
              <img className="img-fluid" src={item.links[0].href} alt="" />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Gallery;
