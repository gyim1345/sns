import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import Comment from "./Comment";
import Remove from "./Remove";
import Edit from "./Edit";
import userStorage from "../stores/userStore";
import toTop from "./toTop";
import Like from "./Like";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Modal from "react-modal";

import ModalBox from "./ModalBox";

if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

function PostsForSearchPage({ posting, sizeOfPicture, setUserOfActivePage, userOfActivePage }) {
  const changeUser = () => {
    setUserOfActivePage(posting.userName);
  };
  return (
    <>
        <Link
          to={`/${posting.userName}/posting/${posting.id}`}
          onClick={changeUser}
        >
          <img
            src={posting.imageUrl}
            alt=""
            width='250px'
            height='200px'
          />
        </Link>
    </>
  );
}

const wordBreak = css`
  word-break: break-all;
`;

const nameSize = css`
  font-size: 18px;
`;

const fuck = css`
  text-decoration: none;
  display: grid;
  grid-template-columns: 10% 15% 75%;
  padding: 0px 0px 10px 0px;
  justify-items: center;
  align-items: center;
`;
const h1 = css`
  border-top: solid 1px;
  width: 580px;
  border-left: solid 1px;
  border-right: solid 1px;
  background-color: white;
  border-color: lightgrey;
  padding: 5px 15px 0px 5px;
  margin: 0px 0px -5px 0px;
`;
const imgCss = css`
  border-radius: 50%;
`;

const title = css`
  text-decoration: none;
  border: 1px solid;
  border-width: 1px;
  width: 600px;
  background-color: white;
  border-color: lightgrey;
`;

export default PostsForSearchPage;
