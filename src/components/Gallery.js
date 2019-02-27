import React, { useState, useEffect } from "react";
import axios from "axios";
const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://images-api.nasa.gov/search?q=nebula")
      .then(result => setData(result.data.collection.items));
  }, []);
  console.log(data[0]);

  return (
    <div className="container text-center">
      <h1>Latest Images</h1>
      <div className="search_images">
        {data.map((item, i) => {
          if (i <= 11) {
            return <img src={item.links[0].href} alt="" />;
          }
        })}
      </div>
    </div>
  );
};

export default Gallery;
