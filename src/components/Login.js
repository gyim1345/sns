import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
// import './components.css';
import Swal from 'sweetalert2';

import { setLoginAPI } from '../apis/login';
import { checkIfLoggedIn } from '../apis/check';

// import MyFont from "<path/to/font.woff>";
// import { injectGlobal } from 'emotion'

const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');

  * {
    text-align: center;
  }
`;

const SNS = styled.h1`
  font-family: 'Dancing Script';
  font-size: -webkit-xxx-large;
`;

const Login = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  loggedIn,
  currentUser
}) => {
  const { register, handleSubmit, errors } = useForm();
  const checkLoggedIn = async () => {
    const response = await checkIfLoggedIn();
    const { loggedIn, userName } = response;
    if (loggedIn === true) {
      setCurrentUser(userName);
      setUserOfActivePage(userName);
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const onSubmit = async data => {
    Swal.fire(`please wait`, '', 'info');
    try {
      const response = await setLoginAPI(data);
      Swal.fire(
        `WelcomeBack ${data.Id.substring(0, data.Id.indexOf('@'))}`,
        '',
        'success'
      );
      response && (setCurrentUser(data.Id), setUserOfActivePage(data.Id));
      setLoggedIn(response);
      setCurrentUser(data.Id);
      setUserOfActivePage(data.Id);
      setLoggedIn(true);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check your Input'
      });
    }
  };

  return (
    <>
      <div css={[box]}>
        <SNS> Bongstagram </SNS>
        <Global styles={GlobalStyles} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          css={[box]}
          className="LoginonSubmit"
        >
          <input
            name="Id"
            defaultValue=""
            ref={register}
            placeholder="전화번호, 사용자 이름, 이메일"
            css={[inputBoxCss]}
          />
          <input
            type="password"
            name="Password"
            defaultValue=""
            ref={register({ required: true, maxLength: 10 })}
            placeholder="비밀번호"
            css={[inputBoxCss]}
          />
          {errors.exampleRequired && <p>This field is required</p>}
          <input type="submit" css={[blackButton]} value="로그인" />
          <span css={[fontCss]}>또는</span>
        </form>
        {loggedIn && <Redirect to={`/TimeLine/${currentUser}`} />}
      </div>
    </>
  );
};

const fontCss = css`
  color: rgba(var(--f52, 153, 153, 153), 1);
  padding-bottom: 4px;
`;

const inputBoxCss = css`
  background: #fafafa;
  border: 1px solid #dbdbdb;
  padding: 7px 60px;
  margin-bottom: 5px;
  margin-left: -10px;
  margin-right: -10px;
`;
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
  border-radius: 4px;
  background-color: cornflowerblue;
  color: white;
  border: 1px solid #dbdbdb;
  padding: 2px 0px;
  margin-bottom: 5px;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: 6px;
`;

// Login.propTypes = {
//   setUserOfActivePage: PropTypes.func,
//   setCurrentUser: PropTypes.func,
//   setLoggedIn: PropTypes.func,
//   loggedIn: PropTypes.bool,
//   currentUser: PropTypes.string
// };

// Login.defaultProps = {
//   setUserOfActivePage: {},
//   setCurrentUser: {},
//   setLoggedIn: {},
//   loggedIn: false,
//   currentUser: ""
// };

export default Login;
