import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import Comment from "./Comment";
import Remove from "./Remove";
import Edit from "./Edit";
import userStore from "../stores/userStore";
import toTop from "./toTop";

function Posting({
  posting,
  comments,
  globalStateForTestingPurpose,
  setGlobalStateForTestingPurpose,
  addComment,
  onChangeComment,
  sizeOfPicture,
  userOfActivePage,
  setUserOfActivePage,
  currentUser
}) {
  const [input] = useState([]);

  const findIfIClickedLike = () => {
    return posting.like.includes(currentUser)
  }

  const deleteLike = () => {
    return posting.like = posting.like.filter(el => el !== currentUser);
  }

  const addLike = () => {
    return postings.like = [...postings.like, currentUser];
  }

  const increaseLikeOnClick = () => {
    !findIfIClickedLike ? addLike : deleteLike;
    setGlobalStateForTestingPurpose(Date.now());
  };

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
          <img src={userStore.getUserImage(posting.userName)} alt="" width={50} />
          {posting.userName}
        </Link>
      </h1>
      <Link to={`/${userOfActivePage}/posting/${posting.id}`} onClick={toTop}>
        <img src={posting.imageUrl} alt="" width={sizeOfPicture} />
        <li>
          [Title]:
          {posting.title}
        </li>
        <li>
          Like:
          {posting.like.length}
        </li>
        {/* [Id]:
        {posting.id}
        Image: */}
      </Link>
      <button type="button" onClick={increaseLikeOnClick} id="increaseLike">
        Like
      </button>
      <Route exact path={`/${userOfActivePage}/posting/${posting.id}`}>
        <Edit
          posting={posting}
          globalStateForTestingPurpose={globalStateForTestingPurpose}
          setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
        />
        <Remove
          posting={posting}
          globalStateForTestingPurpose={globalStateForTestingPurpose}
          setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
        />
        <Comment
          posting={posting}
          comments={comments}
          globalStateForTestingPurpose={globalStateForTestingPurpose}
          setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
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
  comments: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  setGlobalStateForTestingPurpose: PropTypes.elementType,
  addComment: PropTypes.elementType,
  onChangeComment: PropTypes.elementType
};

Posting.defaultProps = {
  userOfActivePage: "",
  setUserOfActivePage: "",
  currentUser: "",
  sizeOfPicture: 0,
  posting: [],
  comments: {},
  state: 0,
  setGlobalStateForTestingPurpose: 0,
  addComment: "",
  onChangeComment: ""
};

export default Posting;
