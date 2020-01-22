/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PostingList from '../components/PostingList';
import pStore from '../stores/postingStore';
import Addpost from '../components/Addpost';
import uStore from '../stores/userStore';
import UserInfoHead from '../components/UserInfoHead';

function PostPage({state, setState, user}) {
  const size = "40%"

  // const onFileChange = (event) => {
  //   if (event.target.files != null && event.target.files.length > 0) {
  //     setFileName(event.target.files[0].name);
  //     setImage(event.target.files[0]);
  //   }
  // };


  return (
    <>
      <UserInfoHead state={state} user={user} />
      <div>
        <Addpost state={state} setState={setState} user={user} />
        <PostingList size={size} user={user} />
      </div>
    </>
  );
}


export default PostPage;
