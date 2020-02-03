import React, { useState } from "react";
import PropTypes from "prop-types";
import postingStorage from "../stores/postingStore";

function AddPost({ setGlobalState, userOfActivePage, currentUser }) {
    const [input, setInput] = useState("");
  
    const onChange = e => {
      setInput(e.target.value);
    };
  
    const checkOwnershipOfPost = () => {
      return userOfActivePage !== currentUser;
    }
  
    const addPostToMyPage = (input) => {
      return postingStorage.createPost(input, currentUser);
    }
  
    const addPost = () => {
      checkOwnershipOfPost()
        ? alert("go to ur page fucker") 
        : (
            addPostToMyPage(input), 
            setGlobalState(Date.now()), 
            setInput("")
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
  setGlobalState: PropTypes.elementType
};

AddPost.defaultProps = {
  userOfActivePage: "",
  currentUser: "",
  setGlobalState: 0
};

export default AddPost;
