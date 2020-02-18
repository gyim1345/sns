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

function Posting({
  posting,
  postingAll,
  setPosting,
  comments,
  addComment,
  onChangeComment,
  sizeOfPicture,
  userOfActivePage,
  setUserOfActivePage,
  currentUser,
  commentAPI,
  setCommentAPI
}) {
  const [input] = useState([]);

  const changeUser = () => {
    setUserOfActivePage(posting.userName);
  };

  return (
    <>
      <h1 css={[h1]}>
        <Link
          css={[fuck]}
          to={`/${posting.userName}`}
          onClick={() => {
            changeUser();
            toTop();
          }}
        >
          <img
            css={[imgCss]}
            src={userStorage.getUserImage(posting.userName)}
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
          {/* <li>
          [Title]:
          {posting.title}
        </li> */}
        </Link>
        <Like
          posting={posting}
          currentUser={currentUser}
          setPosting={setPosting}
          postingAll={postingAll}
        />
        <Route exact path={`/${userOfActivePage}/posting/${posting.id}`}>
          <Edit
            posting={posting}
            setPosting={setPosting}
            currentUser={currentUser}
          />
          <Remove posting={posting} currentUser={currentUser} />
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
            value={input[posting.id]}
            onChange={e => onChangeComment(e, posting.id)}
          />
          <button
            type="button"
            onClick={e => addComment(e, posting.id)}
            id="buttonAddComment"
          >
            AddComment
          </button>
        </Route>
      </div>
    </>
  );
}

const nameSize = css`
font-size: 18px;
`;

const fuck = css`
  text-decoration: none;
  display: grid;
  grid-template-columns: 15% 20% 60%;
  padding: 0px 0px 10px 0px;
  justify-items: center;
  align-items: center;
`;
const h1 = css`
  border-top: solid 1px;
  width: 300px;
  border-left: solid 1px;
  border-right: solid 1px;
  background-color: white;
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
  width: 320px;
  background-color: white;
`;

Posting.propTypes = {
  userOfActivePage: PropTypes.string,
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string,
  sizeOfPicture: PropTypes.string,
  posting: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    userName: PropTypes.string,
    like: PropTypes.arrayOf(PropTypes.string)
  }),
  postingAll: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  comments: PropTypes.arrayOf(PropTypes.object),
  setPosting: PropTypes.elementType,
  addComment: PropTypes.elementType,
  onChangeComment: PropTypes.elementType,
  commentAPI: PropTypes.oneOfType([PropTypes.array]),
  setCommentAPI: PropTypes.elementType
};

Posting.defaultProps = {
  userOfActivePage: "",
  setUserOfActivePage: "",
  currentUser: "",
  sizeOfPicture: 0,
  posting: [],
  comments: {},
  addComment: "",
  onChangeComment: ""
};

export default Posting;
