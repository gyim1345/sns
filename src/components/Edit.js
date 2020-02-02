import React, { useState } from "react";
import PropTypes from "prop-types";
import postingStore from "../stores/postingStore";
import commentStore from "../stores/commentStore";

function Edit({ posting, setGlobalStateForTestingPurpose, commentId, indexOfComment, currentUser }) {
  const [edit, setEdit] = useState([""]);
  const input = [];

  const checkOwnershipOfPost = () => {
    return posting.userName !== currentUser && indexOfComment === undefined;
  }
  
  const clickedIsPostAndIsMine = () => {
    return  postingStore.getPost(posting.id) === posting && posting.userName === currentUser;
  }

  const clickedIsCommentAndIsMine = () => {
    return commentStore.getComment(indexOfComment + 1) === posting[commentId] && commentStore.getComment(indexOfComment + 1).userWritten === currentUser;
  }

  const editPost = () => {
    return postingStore.getPost(posting.id).title = edit[posting.id];
  }

  const editComment = () =>{
    return commentStore.getComment(indexOfComment + 1).title = edit[posting.id];
  }
  const editThis = () => {
    checkOwnershipOfPost 
      ? alert("you dont have permission") 
      : clickedIsPostAndIsMine 
        ? editPost 
        : clickedIsCommentAndIsMine 
          ? editComment 
          : alert(`you dont have permission ${currentUser}`);
    setGlobalStateForTestingPurpose(Date.now());
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
  setGlobalStateForTestingPurpose: PropTypes.elementType,
  indexC: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cid: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Edit.defaultProps = {
  currentUser: "",
  posting: {},
  setGlobalStateForTestingPurpose: 0,
  indexC: undefined,
  cid: undefined
};

export default Edit;
