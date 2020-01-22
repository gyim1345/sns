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
  Switch,
} from 'react-router-dom';
import pStore from '../stores/postingStore';
import cStore from '../stores/commentStore';
import Posting from './Posting';
import Test from './Test';

function PostingList({ postingDetail, size }) {  
 


  const postings = (postingDetail  == undefined) ? pStore.posts : [postingDetail] ;
  const { comments } = cStore;
//  console.log(postings);

  // const [input, setInput] = useState([]);
  const [inputa, setInputa] = useState('');
  const [state, setState] = useState([]);
  // const [input, setInput] = useState('');
  // const [fileName, setFileName] = useState('이미지 파일 선택');


  const onChangeComment = (e) => {
    setInputa(e.target.value);
  };

  const addComment = (_, postId) => {
    const commentLength = cStore.commentsLength;
    cStore.createComment(postId, inputa);
    setState(commentLength);
    
  };



  // const addLineBreaks = (string) => string.split('\n').map((text, index) => (
  //   <React.Fragment key={`${text}-${index}`}>
  //     {text}
  //     <br />
  //   </React.Fragment>
  // ));


  return (
    <>
          <div>
            {postings.map((posting, i) => (
              <ul key={posting.id}>
                {/* {addLineBreaks(posting.id.toString())} */}
                <Posting
                  posting={posting}
                  comments={comments}
                  state={state}
                  setState={setState}
                  addComment={addComment}
                  onChangeComment={onChangeComment}
                  size={size}
                />
                <Switch>
                  <Route exact path={`/posting/${posting.id}`}>
              <Test />
                  </Route>
                </Switch>
              </ul>
            ))}
          </div>            
    </>
  );
}

export default PostingList;
