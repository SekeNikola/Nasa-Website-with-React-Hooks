import React from "react";

const LiveStream = () => {
  return (
    <div className="container text-center">
      <h2>Watch Live </h2>
      <p>
        Direct from America's space program to YouTube, watch NASA TV live
        streaming here to get the latest from our exploration of the universe
        and learn how we discover our home planet.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nA9UZF-SZoQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default LiveStream;