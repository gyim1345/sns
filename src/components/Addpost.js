import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import postingStorage from "../stores/postingStore";
import { addPostAPI } from '../apis/post'
import {getUserPostOnly} from "../apis/post"


function AddPost({ setGlobalState, userOfActivePage, currentUser, posting, setPosting}) {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };
  
    const onClick = async () => {
      try {
        const response = await addPostAPI(input, currentUser);
        setPosting([...posting, response])
      } catch(e) {
        console.log(e)
      }
    }

    
  return (
    <>
      <input value={input} onChange={onChange} />
      <button type="button" onClick={onClick} id="buttonAdd">
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
