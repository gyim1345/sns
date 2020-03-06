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

function Posting({
  posting,
  postingAll,
  setPosting,
  comments,
  addComment,
  sizeOfPicture,
  userOfActivePage,
  setUserOfActivePage,
  currentUser,
  commentAPI,
  setCommentAPI
}) {
  const [input, setInput] = useState([]);

  const changeUser = () => {
    setUserOfActivePage(posting.userName);
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  const addToComment = () => {
    return addComment(null, posting.id, input, currentUser);
  };

  return (
    <>
      <h1 css={[h1]}>
        <Link
          to={`/${posting.userName}`}
          css={[fuck]}
          onClick={() => {
            changeUser();
            toTop();
          }}
        >
          <img
            css={[imgCss]}
            src={"static/images/profilepicture.png"}
            alt=""
            width={35}
          />
          <div css={[nameSize]}>{posting.userName}</div>
        </Link>
      </h1>
      <div css={[title]}>
        <Link to={`/${userOfActivePage}/posting/${posting.id}`} onClick={toTop}>
          <img
            src={posting.imageUrl}
            alt=""
            width={sizeOfPicture.width}
            height={sizeOfPicture.height}
          />
        </Link>
        <div css={[wordBreak]}>{posting.title}</div>

        <div>
          <ModalBox
            posting={posting}
            setPosting={setPosting}
            currentUser={currentUser}
            editInput={input}
          />
        </div>

        <Like
          posting={posting}
          currentUser={currentUser}
          setPosting={setPosting}
          postingAll={postingAll}
        />
        <Route exact path={`/${userOfActivePage}/posting/${posting.id}`}>
          <Comment
            posting={posting}
            comments={comments}
            userOfActivePage={userOfActivePage}
            currentUser={currentUser}
            commentAPI={commentAPI}
            setCommentAPI={setCommentAPI}
            addComment={addComment}
          />
          <input
            value={input}
            onChange={onChange}
            placeholder={"input comment"}
          />
          <button type="button" onClick={addToComment} id="buttonAddComment">
            AddComment
          </button>
        </Route>
      </div>
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

// Posting.propTypes = {
//   userOfActivePage: PropTypes.string,
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string,
//   sizeOfPicture: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   posting: PropTypes.exact({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     imageUrl: PropTypes.string,
//     userName: PropTypes.string,
//     like: PropTypes.arrayOf(PropTypes.string)
//   }),
//   postingAll: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   comments: PropTypes.arrayOf(PropTypes.object),
//   setPosting: PropTypes.elementType,
//   addComment: PropTypes.elementType,
//   onChangeComment: PropTypes.elementType,
//   commentAPI: PropTypes.oneOfType([PropTypes.array]),
//   setCommentAPI: PropTypes.elementType
// };

// Posting.defaultProps = {
//   userOfActivePage: "",
//   setUserOfActivePage: "",
//   currentUser: "",
//   sizeOfPicture: 0,
//   posting: [],
//   comments: {},
//   addComment: "",
//   onChangeComment: ""
// };

export default Posting;
