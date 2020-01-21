import React, { useState } from 'react';
import pStore from '../stores/postingStore';

function AddPost( {state, setState} ) {

  const [input, setInput] = useState('');
  const [image, setImage] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addPost = () => {
    pStore.createPost(input);
    pStore.getPost(1).imageUrl = image;
    setState(Date.now());
    setInput('');
};

  return (
    <>
      <input value={input} onChange={onChange} />
      <button type="button" onClick={addPost} id="buttonAdd">Add</button>
    </>
  )
}

export default AddPost;
