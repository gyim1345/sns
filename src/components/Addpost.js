import React, { useState } from "react";
import PropTypes from "prop-types";
import postingStore from "../stores/postingStore";

function AddPost({ setGlobalStateForTestingPurpose, userOfActivePage, currentUser }) {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const checkOwnershipOfPost = () => {
    return userOfActivePage !== currentUser;
  }

  const addPostToMyPage = () => {
    return postingStore.createPost(input, currentUser);
  }

  const addPost = () => {
    checkOwnershipOfPost 
      ? alert("go to ur page fucker") 
      : (
          addPostToMyPage; 
          setGlobalStateForTestingPurpose(Date.now()); 
          setInput("");
        )
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
  userOfActivePage: PropTypes.string,
  currentUser: PropTypes.string,
  setGlobalStateForTestingPurpose: PropTypes.elementType
};

AddPost.defaultProps = {
  userOfActivePage: "",
  currentUser: "",
  setGlobalStateForTestingPurpose: 0
};

export default AddPost;
