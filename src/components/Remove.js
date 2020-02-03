import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import postingStorage from "../stores/postingStore";
import commentStorage from "../stores/commentStore";

function Remove({
  posting,
  setGlobalState,
  currentUser,
  isComment,
  setIsComment,
  postingId,
  thisComment,
  commentOwner
}) {
  const [removed, setRemoved] = useState(false);

  const checkOwnershipOfComment = () => {
    return currentUser === commentOwner;
  }

  const removeCommentFromStore = () => {
    return commentStorage.removeComment(postingId, thisComment.id);
  }
  
  const checkIsComment = () => {
    return isComment === false;
  }
  
  const checkOwnerShipOfPost = () => {
    return currentUser === posting.userName;
  }

  const RemovePostingFromPostStore = () => {
    return postingStorage.removePost(posting.id);
  }


  const removeThis = () => {
    checkIsComment() 
      ? (
        checkOwnerShipOfPost()
          ? (
            RemovePostingFromPostStore(),
            setRemoved(true),
            setGlobalState(Date.now())
          )
          : alert("you dont have permission")
      ) : checkOwnershipOfComment()
          ? (
            removeCommentFromStore(),
            setGlobalState(Date.now())
          ) : alert("you dont have permission")
  }



  return (
    <>
      <button type="button" onClick={e => removeThis(e)} id="buttonRemove">
        Remove
      </button>
      {removed && <Redirect to={`/${currentUser}/TimeLine`} />}
    </>
  );
}

Remove.propTypes = {
  currentUser: PropTypes.string,
  posting: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  setGlobalState: PropTypes.elementType,
  isComment: PropTypes.bool
};

Remove.defaultProps = {
  currentUser: "",
  posting: {},
  setGlobalState: {},
  isComment: false
};

export default Remove;
