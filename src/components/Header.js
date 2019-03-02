import React from "react";
import "../assets/css/header.scss";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727
              }
            },

            shape: {
              type: "circle",
              stroke: {
                width: 0
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
      <div className="header">
        <div className="container">
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
          <q>
            <i>
              The time will come when man will know even what is going on in the
              other planets and perhaps be able to visit them.
            </i>
          </q>
          <br />
          <span>Henry Ford, Theosophist Magazine, February 1930</span>
        </div>
      </div>
      <div className="container text-center who_we_are">
        <h2>What Does NASA Do?</h2>
        <p>
          We reach for new heights and reveal the unknown for the benefits of
          humankind. Thousands of people have been workng around the world - and
          off of it - for more than 50 years, finding answers. What's out there?
          what will we find? What can we learn there, or learn just by trying to
          get there, that will make life better here on Earth?
        </p>
      </div>
    </>
  );
};

export default Header;
