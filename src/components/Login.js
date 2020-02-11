import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import userStorage from "../stores/userStore";
import { setLoginAPI } from "../apis/login"

const Login = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  toggleLogInStatus,
  loggedIn,
  currentUser
}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const checkIdIsRegistered = (data) => {
    return userStorage.userList.find(item => item.name === data.Id) === undefined
  }

  const checkPassword = (data) => {
    return userStorage.getUserPassword(data.Id) !== data.Password
  }

  const performLogIn = (data) => {
    return (
      setCurrentUser(data.Id),
      setUserOfActivePage(data.Id),
      toggleLogInStatus(),
      alert("logged in"),
      setLoggedIn(true)
    )
  }

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await setLoginAPI(data);
      console.log(response);
      alert(response.statusMessage)
      response.loginStatus
        && (setCurrentUser(data.Id),
          setUserOfActivePage(data.Id))
      // && toggleLogInStatus()
      setLoggedIn(response.loginStatus)

    } catch (e) {
      console.log(e)
    }
  };

  console.log(currentUser , loggedIn)

  // const onSubmit = data => {
  //   console.log(userStorage.userList.find(item => item.name === data.Id) === undefined)
  //     checkIdIsRegistered(data)
  //       ? alert("check id") 
  //       : checkPassword(data)
  //         ? alert("check password") 
  //         : performLogIn(data);
  // };

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
