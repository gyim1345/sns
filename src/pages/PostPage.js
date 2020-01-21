/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PostingList from '../components/PostingList';
import pStore from '../stores/postingStore';
import Addpost from '../components/Addpost';


function PostPage({state, setState}) {
  
  // const onFileChange = (event) => {
  //   if (event.target.files != null && event.target.files.length > 0) {
  //     setFileName(event.target.files[0].name);
  //     setImage(event.target.files[0]);
  //   }
  // };

  return (
    <>
      <div>
        <Addpost state={state} setState={setState} />
        <PostingList />
      </div>
    </>
  );
}


export default PostPage;
