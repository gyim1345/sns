/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PostingList from '../components/PostingList';

function PostPage() {

  // const onFileChange = (event) => {
  //   if (event.target.files != null && event.target.files.length > 0) {
  //     setFileName(event.target.files[0].name);
  //     setImage(event.target.files[0]);
  //   }
  // };

  return (
    <>
      <div>
        <PostingList />
      </div>
    </>
  );
}


export default PostPage;
