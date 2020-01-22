/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
// import Test from "./Test.js"
import Comment from './Comment';
import Remove from './Remove';
import Edit from './Edit';


function Posting({
  posting,
  comments,
  state,
  setState,
  addComment,
  onChangeComment,
  size,
}) {
  const [input, setInput] = useState([]);

  return (
    <div>
      <Link to={`/posting/${posting.id}`}>
        <img
          src={posting.imageUrl}
          alt=""
          width={size}
        />
        <li>
          [Title]:
          {posting.title}
        </li>
        {/* [Id]:
        {posting.id}
        Image: */}
      </Link>
      <Route exact path={`/posting/${posting.id}`}>
        <Edit stateP={posting} state={state} setState={setState} />
        <Remove stateP={posting} state={state} setState={setState} />
        <Comment posting={posting} comments={comments} state={state} setState={setState} />
        <input value={input[posting.id]} onChange={(e) => onChangeComment(e, posting.id)} />
        <button type="button" onClick={(e) => addComment(e, posting.id)} id="buttonAddComment">AddComment</button>
      </Route>
    </div>

  );
}

export default Posting;
