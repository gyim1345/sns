import React from "react";
import { useForm } from "react-hook-form";
import { registerAPI } from "../apis/post";
import { css } from "@emotion/core";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const registration = async data => {
    try {
      const response = await registerAPI(data.Id, data.Password);
      alert(response.Message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(registration)} css={[box]}>
      {/* <span>[Register]</span> */}
      <input
        name="Id"
        defaultValue=""
        ref={register}
        placeholder="가입 원하는 아이디"
        css={[inputButtonCss]}
      />
      {/* <label>password:</label> */}
      <input
        name="Password"
        defaultValue=""
        ref={register({ required: true, maxLength: 10 })}
        placeholder="비밀번호"
        css={[inputButtonCss]}
      />
      <input type="submit" css={[submitButtonCss]} value="가입하기" />
    </form>
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

const inputButtonCss = css`
  background: #fafafa;
  border: 1px solid #dbdbdb;
  padding: 7px 60px;
  margin-bottom: 5px;
  margin-left: -10px;
  margin-right: -10px;
`;

const submitButtonCss = css`
  border-radius: 4px;
  background-color: cornflowerblue;
  color: white;
  border: 1px solid #dbdbdb;
  padding: 4px 0px;
  margin-bottom: 5px;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: 6px;
`;

export default Register;
