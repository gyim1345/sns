/* eslint-disable react/prop-types */
import React, { useState } from "react";
import pStore from "../stores/postingStore";

function AddPost({ setState, user, globalUser }) {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const addPost = () => {
    if(user!== globalUser)
    return alert('go to ur page fucker')
    pStore.createPost(input, globalUser);

    setState(Date.now());
    setInput("");
  };

  return (
    <>
      <input value={input} onChange={onChange} />
      <button type="button" onClick={addPost} id="buttonAdd">
        Add
      </button>
    </>
  );
}

export default AddPost;
