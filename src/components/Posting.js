import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import Comment from "./Comment";
import Remove from "./Remove";
import Edit from "./Edit";
import uStore from "../stores/userStore";
import toTop from "./toTop";

function Posting({
  posting,
  comments,
  state,
  setState,
  addComment,
  onChangeComment,
  size,
  user,
  setUser,
  globalUser
}) {
  const [input] = useState([]);

  const increaseLike = () => {
    if (!posting.like.includes(globalUser)) posting.like.push(globalUser);
    else if (posting.like.includes(globalUser))
      posting.like = posting.like.filter(el => el !== globalUser);
    setState(Date.now());
  };

  const changeUser = () => {
    setUser(posting.userName);
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
          <img src={uStore.getUserImage(posting.userName)} alt="" width={50} />
          {posting.userName}
        </Link>
      </h1>
      <Link to={`/${user}/posting/${posting.id}`} onClick={toTop}>
        <img src={posting.imageUrl} alt="" width={size} />
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
      <button type="button" onClick={increaseLike} id="increaseLike">
        Like
      </button>
      <Route exact path={`/${user}/posting/${posting.id}`}>
        <Edit
          stateP={posting}
          state={state}
          setState={setState}
          user={user}
          globalUser={globalUser}
        />
        <Remove
          stateP={posting}
          state={state}
          setState={setState}
          user={user}
          globalUser={globalUser}
        />
        <Comment
          posting={posting}
          comments={comments}
          state={state}
          setState={setState}
          user={user}
          globalUser={globalUser}
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
  user: PropTypes.string,
  setUser: PropTypes.string,
  globalUser: PropTypes.string,
  size: PropTypes.number,
  posting: PropTypes.element,
  comments: PropTypes.element,
  state: PropTypes.elementType,
  setState: PropTypes.elementType,
  addComment: PropTypes.elementType,
  onChangeComment: PropTypes.elementType
};

Posting.defaultProps = {
  user: "",
  setUser: "",
  globalUser: "",
  size: 0,
  posting: [],
  comments: [],
  state: 0,
  setState: 0,
  addComment: "",
  onChangeComment: ""
};


export default Posting;
