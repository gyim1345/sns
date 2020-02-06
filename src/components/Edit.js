import React, { useState } from "react";
import PropTypes from "prop-types";
import postingStorage from "../stores/postingStore";
import commentStorage from "../stores/commentStore";
import countStore from "../stores/countStore";

function Edit({ posting, setGlobalState, indexOfCommentOnThisPosting, idOfComment, thisComment, currentUser }) {
  const [edit, setEdit] = useState([""]);
  const input = [];
  
const checkOwnershipOfPost = () => {
  return posting.userName !== currentUser && thisComment === undefined;
}

const clickedIsPostAndIsMine = () => {
  return  postingStorage.getPost(posting.id) === posting && posting.userName === currentUser;
}

const clickedIsCommentAndIsMine = () => {
  return commentStorage.getComment(thisComment.id) === posting[indexOfCommentOnThisPosting] && commentStorage.getComment(thisComment.id).userWritten === currentUser;
}

const editPost = () => {
  return postingStorage.getPost(posting.id).title = edit[posting.id];
}

const editComment = () =>{
  return commentStorage.getComment(thisComment.id).title = edit[posting.id];
}
const editThis = () => {
  checkOwnershipOfPost()
    ? alert("you dont have permission") 
    : clickedIsPostAndIsMine()
      ? editPost()
      : clickedIsCommentAndIsMine()
        ? editComment() 
        : alert(`you dont have permission ${currentUser}`);
  setGlobalState(Date.now());
};



  const onEdit = (e, Id) => {
    edit[Id] = e.target.value;
    setEdit(edit);
  };

  return (
    <>
      <input
        type="text"
        value={input[posting.id]}
        onChange={e => onEdit(e, posting.id)}
      />
      <button type="button" onClick={editThis} id="buttonEdit">
        Edit
      </button>
    </>
  );
}

Edit.propTypes = {
  currentUser: PropTypes.string,
  posting: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  setGlobalState: PropTypes.elementType,
  indexOfComment: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cid: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Edit.defaultProps = {
  currentUser: "",
  posting: {},
  setGlobalState: 0,
  indexOfComment: undefined,
  cid: undefined
};

export default Edit;
