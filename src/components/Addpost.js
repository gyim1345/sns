import React, { useState } from "react";
import PropTypes from "prop-types";
import pStore from "../stores/postingStore";

function AddPost({ setState, user, globalUser }) {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const addPost = () => {
    if (user !== globalUser) alert("go to ur page fucker");
    else {
      pStore.createPost(input, globalUser);
      setState(Date.now());
      setInput("");
    }
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

AddPost.propTypes = {
  user: PropTypes.string,
  globalUser: PropTypes.string,
  setState: PropTypes.elementType
};

AddPost.defaultProps = {
  user: "",
  globalUser: "",
  setState: 0
};

export default AddPost;
