/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from 'react-router-dom';
import pStore from '../stores/postingStore';
import cStore from '../stores/commentStore';
import Posting from './Posting';
import Comment from './Comment';
import Remove from './Remove';
import Edit from './Edit';


function PostingList({ state, setState }) {
  const postings = pStore.posts;
  const { comments } = cStore;

  const [input, setInput] = useState([]);
  const [inputa, setInputa] = useState('');

  const onChangeComment = (e, id) => {
    setInputa(e.target.value);
  };

  const addComment = (e, postId) => {
    const commentLength = cStore.commentsLength;
    cStore.createComment(postId, inputa);
    setState(commentLength);
  };

  const addLineBreaks = (string) => string.split('\n').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ));


  return (
    <>
    <Router>
    <Link to='/'> Home </Link>
    <Link to='/about'>About</Link>
    <Route path="/">
      <ul>
        {postings.map((posting) => (
          <li key={posting.id}>
            {addLineBreaks(posting.id.toString())}
            <Posting posting={posting} comments={comments} state={state} setState={setState} addComment={addComment} onChangeComment={onChangeComment} input={input}/>
            {/* <Edit stateP={posting} state={state} setState={setState} />
            <Remove stateP={posting} state={state} setState={setState} /> */}
            {/* <Comment posting={posting} comments={comments} state={state} setState={setState} /> */}
            </li>
        ))}
      </ul>
      </Route>
      <Route path='/about'>
        <h1>asadasd</h1>
      </Route>
      
      </Router>
    </>
  );
}

export default PostingList;
