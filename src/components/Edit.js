import React, { useState } from "react";
import { editPostAPI } from "../apis/post";
import PropTypes from "prop-types";

function Edit({
  posting,
  setPosting,
  indexOfCommentOnThisPosting,
  currentUser,
  setCommentAPI
}) {
  const thisPost = posting[indexOfCommentOnThisPosting] || posting;
  const [input, setInput] = useState([thisPost.title]);

  const onEdit = e => {
    setInput(e.target.value);
  };

  const onClick = async () => {
    try {
      const response = await editPostAPI(
        input,
        posting,
        currentUser,
        indexOfCommentOnThisPosting
      );
      console.log(response)
      response.Message !== undefined
        ? alert(response.Message)
        : indexOfCommentOnThisPosting === undefined
        ? setPosting(response)
        : setCommentAPI(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <input type="text" value={input} onChange={e => onEdit(e)} />
      <button type="button" onClick={onClick} id="buttonEdit">
        Edit
      </button>
    </>
  );
}

// Edit.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   setPosting: PropTypes.elementType,
//   indexOfCommentOnThisPosting: PropTypes.number,
//   setCommentAPI: PropTypes.elementType
// };

// Edit.defaultProps = {
//   currentUser: "",
//   posting: {},
//   indexOfComment: undefined,
//   cid: undefined
// };

export default Edit;
