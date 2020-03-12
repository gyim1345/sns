import React, { useState } from "react";
import { addPostAPI } from "../apis/post";
import { useParams } from "react-router-dom";

function AddPost({ currentUser, posting, setPosting }) {
  const [input, setInput] = useState("");
  const { user } = useParams();

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
      {user === currentUser && <input value={input} onChange={onChange} />}
      {user === currentUser && (
        <button type="button" onClick={onClick} id="buttonAdd">
          Add Post
        </button>
      )}
    </>
  );
}

// AddPost.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   setPosting: PropTypes.func
// };

// AddPost.defaultProps = {
//   currentUser: ""
// };

export default AddPost;
