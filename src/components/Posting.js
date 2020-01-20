/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Link, Route } from 'react-router-dom';
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
  input,
}) {
  return (
    <div>
      <Link to={`/posting${posting.id}`}>
        [Title]:
        {posting.title}
        [Id]:
        {posting.id}
      </Link>
      <Route exact path={`/posting${posting.id}`}>
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
