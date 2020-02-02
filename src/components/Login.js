import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import userStore from "../stores/userStore";

const Login = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  toggleLogInStatus,
  loggedIn,
  currentUser
}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const checkIdIsRegistered = () => {
    return userStore.userList.find(item => item.name === data.Id) === undefined
  }

  const checkPassword = () => {
    return userStore.getUserPassword(data.Id) !== data.Password
  }

  const performLogIn = () => {
    return (
      setCurrentUser(data.Id);
      setUserOfActivePage(data.Id);
      toggleLogInStatus();
      alert("logged in");
      setLoggedIn(true);
    )
  }

  const onSubmit = data => {
      checkIdIsRegistered 
        ? alert("check id") 
        : checkPassword 
          ? alert("check password") 
          : performLogIn;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>[Login] </span>
        <label>Id: </label>
        <input name="Id" defaultValue="" ref={register} />
        <label>password:</label>
        <input
          name="Password"
          defaultValue=""
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.exampleRequired && <p>This field is required</p>}
        <input type="submit" />
      </form>
      {loggedIn && <Redirect to={`/${currentUser}/TimeLine`} />}
    </>
  );
};

Login.propTypes = {
  setUserOfActivePage: PropTypes.func,
  setCurrentUser: PropTypes.func,
  toggleLogInStatus: PropTypes.func,
  setLoggedIn: PropTypes.func,
  loggedIn: PropTypes.bool,
  currentUser: PropTypes.string
};

Login.defaultProps = {
  setUserOfActivePage: {},
  setCurrentUser: {},
  toggleLogInStatus: {},
  setLoggedIn: {},
  loggedIn: false,
  currentUser: ""
};

export default Login;
