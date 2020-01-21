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

function PostingList() {  
  const postings = pStore.posts;
  const { comments } = cStore;

  // const [input, setInput] = useState([]);
  const [inputa, setInputa] = useState('');
  const [state, setState] = useState([]);
  const [input, setInput] = useState('');
  const [fileName, setFileName] = useState('이미지 파일 선택');
  const [image, setImage] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addPost = () => {
    pStore.createPost(input);
    setState({
      id: pStore.postsLength + 1,
      title: input,
    });
    pStore.getPost(1).imageUrl = image;
  };
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
     
          <input value={input} onChange={onChange} />
          <button type="button" onClick={addPost} id="buttonAdd">Add</button>
          {/* <div className="file-box">
              <input className="upload-name" value={fileName} disabled />

              <label htmlFor="ex_filename" className="btn btn-secondary">업로드</label>
              <input type="file" id="ex_filename" className="upload-hidden" onChange={onFileChange}/>
            </div> */}

          <ul>
            {postings.map((posting, i) => (
              <li key={posting.id}>
                {/* {addLineBreaks(posting.id.toString())} */}
                <Posting
                  posting={posting}
                  comments={comments}
                  state={state}
                  setState={setState}
                  addComment={addComment}
                  onChangeComment={onChangeComment}
                  input={input}
                />
                <Switch>
                  <Route exact path={`/posting/${posting.id}`}>
              <Test />
                  </Route>
                </Switch>


              </li>
            ))}
          </ul>
       
  
            
    </>
  );
}

export default PostingList;
