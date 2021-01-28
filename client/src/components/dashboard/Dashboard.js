import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
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
                <b>Hey there,</b> {user.name.split(" ")[0]}!
                <p className="flow-text grey-text text-darken-1 p-sidebar">
                  You are logged into{" "}
                  <span style={{ fontFamily: "monospace" }}>FurSquare</span>!
                </p>
              </h4>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  {/* <li>
                    <a href="#profile" data-nav-section="profile">
                      Profile
                    </a>
                  </li> */}
                  <li>
                  <Link to="/dashboard/pets" data-nav-section="pets">
                      Your Pets
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/services" data-nav-section="services">
                      Search Services
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#connect" data-nav-section="connect">
                      Connect with Other Pet People
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="#adopt" data-nav-section="adopt">
                      Add a fur baby to your family
                    </a>
                  </li> */}
                  <li>
                    <button
                      className="btn btn-large btn-sidebar"
                      onClick={this.onLogoutClick}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
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
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-coffee" aria-hidden="true"></i>
                </small>
              </p>
              <p>
                <small>&copy;2021 FurSquare</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { logoutUser })(Dashboard);
