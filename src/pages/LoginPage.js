// /* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import Register from "../components/Register";
import Login from "../components/Login";

const LoginPage = ({
  setUser,
  setGlobalUser,
  setLoggedIn,
  logStatus,
  loggedIn,
  globalUser
}) => {
  return (
    <>
      <Login
        setUser={setUser}
        setGlobalUser={setGlobalUser}
        setLoggedIn={setLoggedIn}
        logStatus={logStatus}
        loggedIn={loggedIn}
        globalUser={globalUser}
      />
      <Register />
    </>
  );
}; // your form submit function which will invoke after successful validation

LoginPage.propTypes = {
  setUser: PropTypes.func,
  setGlobalUser: PropTypes.func,
  logStatus: PropTypes.func,
  setLoggedIn: PropTypes.func,
  loggedIn: PropTypes.bool,
  globalUser: PropTypes.string
};

LoginPage.defaultProps = {
  setUser: {},
  setGlobalUser: {},
  logStatus: {},
  setLoggedIn: {},
  loggedIn: false,
  globalUser: ""
};

export default LoginPage;
