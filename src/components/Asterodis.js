import React, { useState, useEffect } from "react";
import axios from "axios";

const Asterodis = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=8OFVBXLQrAKgiDBhhdzPRNXwVNicaUie7yQRJYFE`
      )
      .then(result => setData(result.data.near_earth_objects));
  }, []);

  return (
    <div className="container text-center mb-5 mt-5" id="objects">
      <h2>Near Earth Objects</h2>
      <p>These are Asteroids that are currently orbiting our Earth</p>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Estimated diameter in meters</th>
            <th scope="col">Potentially hazardous asteroid</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map(objects => {
              return (
                <tr key={objects.name}>
                  <td>{objects.name}</td>
                  <td>
                    {Math.round(
                      objects.estimated_diameter.meters.estimated_diameter_max
                    )}
                  </td>
                  <td>
                    {objects.is_potentially_hazardous_asteroid ? "yes" : "no"}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Asterodis;
