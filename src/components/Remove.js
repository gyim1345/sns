import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import postingStorage from "../stores/postingStore";
import commentStorage from "../stores/commentStore";
import { removePostApi } from "../apis/post";
import { useParams } from "react-router-dom";


function Remove({
  posting,
  setPosting,
  setGlobalState,
  currentUser,
  isComment,
  setIsComment,
  postingId,
  thisComment,
  commentOwner,
  indexOfCommentOnThisPosting,
  setCommentAPI
}) {
  const [removed, setRemoved] = useState(false);
  const { postingId1 } = useParams();

  // const checkOwnershipOfComment = () => {
  //   return currentUser === commentOwner;
  // }

  // const removeCommentFromStore = () => {
  //   return commentStorage.removeComment(postingId, thisComment.id);
  // }
  
  // const checkIsComment = () => {
  //   return isComment === false;
  // }
  
  // const checkOwnerShipOfPost = () => {
  //   return currentUser === posting.userName;
  // }

  // const RemovePostingFromPostStore = () => {
  //   return postingStorage.removePost(posting.id);
  // }
  const onClick = async () => {
    try {
      const response = await removePostApi(posting, currentUser, indexOfCommentOnThisPosting)
      if(response.Message !== undefined)
      return alert(response.Message)
      indexOfCommentOnThisPosting === undefined
      ? setRemoved(response)
      : setCommentAPI(response)
    }catch(e) {
      console.log(e)
    }
  }


  // const removeThis = () => {
  //   checkIsComment() 
  //     ? (
  //       checkOwnerShipOfPost()
  //         ? (
  //           RemovePostingFromPostStore(),
  //           setRemoved(true),
  //           setGlobalState(Date.now())
  //         )
  //         : alert("you dont have permission")
  //     ) : checkOwnershipOfComment()
  //         ? (
  //           removeCommentFromStore(),
  //           setGlobalState(Date.now())
  //         ) : alert("you dont have permission")
  // }



  return (
    <>
      <button type="button" onClick={onClick} id="buttonRemove">
        Remove
      </button>
      {removed && <Redirect to={`/${currentUser}/TimeLine`} />}
    </>
  );
}

// Remove.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   setGlobalState: PropTypes.elementType,
//   isComment: PropTypes.bool
// };

// Remove.defaultProps = {
//   currentUser: "",
//   posting: {},
//   setGlobalState: {},
//   isComment: false
// };

export default Remove;
