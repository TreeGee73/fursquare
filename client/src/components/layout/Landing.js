import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            // aria-expanded="false"
            // aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <Link
                  to="/"
                  style={{
                    fontFamily: "monospace",
                  }}
                  className="col s5 brand-logo center black-text"
                >
                  FurSquare
                </Link>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> hellofursquare@gmail.com
              </span>
              <h4 className="h4-sidebar">
                <b>
                  Welcome to{" "}
                  <span style={{ fontFamily: "monospace" }}>FurSquare</span>!
                </b>
              </h4>
              <p className="flow-text grey-text text-darken-1">
                A resource site for pet owners and their pets to find services
                and connect with other pet owners.
              </p>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>
              </div>
              <nav id="colorlib-main-menu">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/FurSquare-104546528312924"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/SquareFur"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/hellofursquare/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="colorlib-footer">
                <p>
                  <small>
                    Made with <i className="icon-heart" aria-hidden="true" />{" "}
                    and <i className="icon-coffee" aria-hidden="true"></i>
                  </small>
                </p>
                <p>
                  <small>&copy;2021 FurSquare</small>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Landing;
