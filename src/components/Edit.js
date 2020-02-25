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
  const [edit, setEdit] = useState([]);
  const input = [];
  const index = useState(indexOfCommentOnThisPosting)
  const onEdit = e => {
    // edit[Id] = e.target.value;
    setEdit(e.target.value);
  };

  const onClick = async () => {
    try {
      const response = await editPostAPI(
        edit,
        posting,
        currentUser,
        indexOfCommentOnThisPosting
      );
      response.Message !== undefined
        ? alert(response.Message)
        : indexOfCommentOnThisPosting === undefined
        ? setPosting([response])
        : setCommentAPI(response);
      // setPosting([...posting, response])x
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <input
        type="text"
        value={input[posting.id]}
        onChange={e => onEdit(e)}
        placeholder={posting.title || "edit comment"}
      />
      <button type="button" onClick={onClick} id="buttonEdit">
        Edit
      </button>
    </>
  );
}

Edit.propTypes = {
  currentUser: PropTypes.string,
  posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  setPosting: PropTypes.elementType,
  indexOfCommentOnThisPosting: PropTypes.number,
  setCommentAPI: PropTypes.elementType
};

Edit.defaultProps = {
  currentUser: "",
  posting: {},
  indexOfComment: undefined,
  cid: undefined
};

export default Edit;
