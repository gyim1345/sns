import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { setLoginAPI } from "../apis/login";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import "./components.css";
// import MyFont from "<path/to/font.woff>";
// import { injectGlobal } from 'emotion'

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");

  * {
    text-align: center;
  }
`;

const SNS = styled.h1`
  font-family: "Dancing Script";
  font-size: -webkit-xxx-large;
`;

const FromLocal = styled.h1`
  font-family: "Local Font";
`;

const Login = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  loggedIn,
  currentUser
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    try {
      const response = await setLoginAPI(data);
      alert(response.statusMessage);
      response.loginStatus &&
        (setCurrentUser(data.Id), setUserOfActivePage(data.Id));
      setLoggedIn(response.loginStatus);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button className="trigger">Click here to trigger the modal!</button>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <h1>Hello, I am a modal!</h1>
        </div>
      </div>
      <div css={[box]}>
        <SNS> Bongstagram </SNS>
        <Global styles={GlobalStyles} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          css={[box]}
          className="LoginonSubmit"
        >
          {/* <span>[Login] </span> */}
          {/* <label>Id: </label> */}
          <input
            name="Id"
            defaultValue=""
            ref={register}
            placeholder="Login Id"
          />
          {/* <label>password:</label> */}
          <input
            name="Password"
            defaultValue=""
            ref={register({ required: true, maxLength: 10 })}
            placeholder="Login password"
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <input type="submit" css={[blackButton, whiteButton]} value="Login" />
          Or
        </form>
        {loggedIn && <Redirect to={`/TimeLine/${currentUser}`} />}
      </div>
    </>
  );
};

const box = css`
  display: -webkit-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  display: inline-flex;
`;
// Billabong = new FontFace("Billabong", "url(./fonts/Billabong.ttf)");

// const styles = css
//   @font-face {
//     font-family: "MyFontName";
//     src: url('./fonts/Billabong.ttf') format("ttf"),
//   }
// const frontface = css`
//   @font-face {
//     font-family: "Billabong";
//     src: url(Billabong.ttf) format("ttf");
//   }
// `;
// const SNS = css`
//   display: flex;
//   justify-content: center;
//   font-size: 20px;
//   font-family: frontface
// `;
const button = css`
  border-radius: 4px;
`;

const whiteButton = css`
  ${button}
  label: white-button;
  background-color: cornflowerblue;
  color: white;
`;

const blackButton = css`
  ${button}
  label: black-button;
  background-color: cornflowerblue;
  color: white;
`;

Login.propTypes = {
  setUserOfActivePage: PropTypes.func,
  setCurrentUser: PropTypes.func,
  setLoggedIn: PropTypes.func,
  loggedIn: PropTypes.bool,
  currentUser: PropTypes.string
};

Login.defaultProps = {
  setUserOfActivePage: {},
  setCurrentUser: {},
  setLoggedIn: {},
  loggedIn: false,
  currentUser: ""
};

export default Login;
