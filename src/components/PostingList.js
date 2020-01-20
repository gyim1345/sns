/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import pStore from '../stores/postingStore';
import cStore from '../stores/commentStore';
import Posting from './Posting';

function PostingList({
  state, setState, onChange, addPost, inputPage,
}) {
  const postings = pStore.posts;
  const { comments } = cStore;

  const [input, setInput] = useState([]);
  const [inputa, setInputa] = useState('');

  const onChangeComment = (e) => {
    setInputa(e.target.value);
  };

  const addComment = (_, postId) => {
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
        <Link to="/"> Home </Link>
        <Route exact path="/">
          <input value={inputPage} onChange={onChange} />
          <button type="button" onClick={addPost} id="buttonAdd">Add</button>
          <ul>
            {postings.map((posting) => (
              <li key={posting.id}>
                {addLineBreaks(posting.id.toString())}
                <Posting
                  posting={posting}
                  comments={comments}
                  state={state}
                  setState={setState}
                  addComment={addComment}
                  onChangeComment={onChangeComment}
                  input={input}
                />
              </li>
            ))}
          </ul>
        </Route>
        <ul>
          {postings.map((posting, i) => (
            <Route exact path={`/posting${posting.id}`}>
              <li key={i}>
                <Posting
                  posting={posting}
                  comments={comments}
                  state={state}
                  setState={setState}
                  addComment={addComment}
                  onChangeComment={onChangeComment}
                  input={input}
                />
              </li>
            </Route>
          ))}
        </ul>
      </Router>
    </>
  );
}

export default PostingList;
