import React from "react";
import "../assets/css/header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container fixed-top">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <a className="navbar-brand" href="#">
              <img
                src={require("../assets/img/nasa-worm-logotype.png")}
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Mission <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nasa TV
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Downloads
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header-title">
          <h1>Welcome Home, Earthling</h1>
        </div>
      </div>
      <div className="container text-center who_we_are">
        <h2>What Does NASA Do?</h2>
        <p>
          We reach for new heights and reveal the unknown for the benefits of
          humankind. Thousands of people have been workng around the world - and
          off of it - for more than 50 years, finding answers. What's out there?
          what will we find? What can we learn there, or learn just by trying to
          get there, that will make life better here on Earth?{" "}
        </p>
      </div>
      <iframe
        src="//www.youtube.com/embed/qnTsIVYxYkc?showinfo=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </>
  );
};

export default Header;
