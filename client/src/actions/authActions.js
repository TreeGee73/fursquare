import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export function registerUser(userData, history) {
  return function (dispatch) {
    axios
      .post("/api/users/register", userData)
      .then(function (res) {
        return history.push("/login");
      })
      // re-direct to login on successful register
      .catch(function (err) {
        return dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };
}

// Login - get user token
export function loginUser(userData) {
  return function (dispatch) {
    axios
      .post("/api/users/login", userData)
      .then(function (res) {
        // Save and set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(function (err) {
        return dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      });
  };
}

// Set logged in user
export function setCurrentUser(decoded) {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
}

// User loading
export function setUserLoading() {
  return {
    type: USER_LOADING,
  };
}

// Log user out
export function logoutUser() {
  return function (dispatch) {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };
}
