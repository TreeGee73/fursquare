import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Adopt extends Component {
  render() {
    const { user } = this.props.auth;
  return (
    <div id="main">
      <div
          style={{
            backgroundImage: `url(${
              `${process.env.PUBLIC_URL}/images/adopt.jpg`
            })`,
            height: "150vh",
          }}
        >
        <h1><b>Hey there,{" "}</b>
          {user.name.split(" ")[0]}!<br></br>Looking for a new FurBaby?
          </h1>
          </div>
      </div>
    );
  }
}

Adopt.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { logoutUser })(Adopt);

