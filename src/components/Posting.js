/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Comment from "./Comment";
import Remove from "./Remove";
import Edit from "./Edit";

function Posting({
  posting,
  comments,
  state,
  setState,
  addComment,
  onChangeComment,
  size,
  user
}) {
  const [input] = useState([]);

  const increaseLike = () => {
    if (!posting.like.includes(user)) posting.like.push(user);
    else if (posting.like.includes(user))
      posting.like = posting.like.filter(el => el !== user);
    setState(Date.now());
  };

  return (
    <div>
      <Link to={`/${user}/posting/${posting.id}`}>
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
        <Edit stateP={posting} state={state} setState={setState} user={user} />
        <Remove
          stateP={posting}
          state={state}
          setState={setState}
          user={user}
        />
        <Comment
          posting={posting}
          comments={comments}
          state={state}
          setState={setState}
          user={user}
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

export default Posting;
