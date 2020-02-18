import React from "react";
import { useForm } from "react-hook-form";
import { registerAPI } from "../apis/post";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

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
        placeholder="Register Id"
      />
      {/* <label>password:</label> */}
      <input
        name="Password"
        defaultValue=""
        ref={register({ required: true, maxLength: 10 })}
        placeholder="Register password"
      />
      <input type="submit" css={[button]} value="Register" />
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

const button = css`
  border-radius: 4px;
  label: white-button;
  background-color: cornflowerblue;
  color: white;
`;

export default Register;
