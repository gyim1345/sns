/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PostingList from '../components/PostingList';
import store from '../stores/postingStore';


function PostPage() {
  const [state, setState] = useState([]);
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addPost = () => {
    store.createPost(input);
    setState({
      id: store.postsLength + 1,
      title: input,
    });
  };

  return (
    <div>
      <PostingList
        state={state}
        setState={setState}
        onChange={onChange}
        addPost={addPost}
        input={input}
      />
    </div>
  );
}


export default PostPage;
