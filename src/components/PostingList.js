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
import Test from './Test';

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
      <Route exact path="/">
      <ul>
        {postings.map((posting) => (
          <li key={posting.id}>
            {addLineBreaks(posting.id.toString())}
            <Posting posting={posting} comments={comments} state={state} setState={setState} addComment={addComment} onChangeComment={onChangeComment} input={input} />
          </li>
        ))}
      </ul>
    </Route>

      <Route exact path='/about'>
        <h1>asadasd</h1>
      </Route>

      <ul>
        {postings.map((posting, i) => (
         <Route exact path={`/posting${posting.id}`}> 
          <li key={i}>        
            <Posting posting={posting} comments={comments} state={state} setState={setState} addComment={addComment} onChangeComment={onChangeComment} input={input} />
            </li>
        </Route>
        ))}
      </ul>
    </Router>
    </>
  );
}

export default PostingList;
