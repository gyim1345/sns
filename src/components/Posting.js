import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import Comment from "./Comment";
import Remove from "./Remove";
import Edit from "./Edit";
import userStorage from "../stores/userStore";
import toTop from "./toTop";
import Like from "./Like";

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
    <div>
      <h1>
        <Link
          to={`/${posting.userName}`}
          onClick={() => {
            changeUser();
            toTop();
          }}
        >
          <img
            src={userStorage.getUserImage(posting.userName)}
            alt=""
            width={50}
          />
          {posting.userName}
        </Link>
      </h1>
      <Link to={`/${userOfActivePage}/posting/${posting.id}`} onClick={toTop}>
        <img src={posting.imageUrl} alt="" width={sizeOfPicture} />
        <li>
          [Title]:
          {posting.title}
        </li>
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
  );
}

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
