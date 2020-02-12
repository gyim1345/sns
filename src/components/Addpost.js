import React, { useState } from "react";
import PropTypes from "prop-types";
import { addPostAPI } from "../apis/post";

function AddPost({ currentUser, posting, setPosting }) {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const onClick = async () => {
    try {
      const response = await addPostAPI(input, currentUser);
      setPosting([...posting, response]);
    } catch (e) {
      console.log(e);
    }
  };

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
  currentUser: PropTypes.string,
  posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  setPosting: PropTypes.func
};

AddPost.defaultProps = {
  currentUser: ""
};

export default AddPost;
