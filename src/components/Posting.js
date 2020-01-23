/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
// import Test from "./Test.js"
import Comment from "./Comment";
import Remove from "./Remove";
import Edit from "./Edit";
import pStore from "../stores/postingStore";

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
  
  const increaseLikeOnPost = (e, Id) =>{
  
    posting.like = posting.like +1;
    
    setState(Date.now())
    // pStore.getLike(1) = pStore.getLike(1)+1
  } 

  
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
          {posting.like}
        </li>
       
        {/* [Id]:
        {posting.id}
        Image: */}
      </Link>
      <button type="button" onClick={e => increaseLikeOnPost(e, posting.id)}>
        Like
      </button>
      <Route exact path={`/${user}/posting/${posting.id}`}>
        <Edit stateP={posting} state={state} setState={setState} />
        <Remove stateP={posting} state={state} setState={setState} />
        <Comment
          posting={posting}
          comments={comments}
          state={state}
          setState={setState}
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
