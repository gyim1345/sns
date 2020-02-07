import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";
import Remove from "./Remove";
import Like from "./Like";
import commentStorage from "../stores/commentStore"
import Reply from "./Reply";
import { getCommentFromIdAPI } from "../apis/comment"

function Comment({ posting, comments, globalState, setGlobalState, currentUser,commentAPI }) {
  const commentsForThisPosting = comments.filter(el => el.postLId === posting.id);
  const [isComment, setIsComment] = useState(true);
 

  commentsForThisPosting.sort(function(a,b) {
    return (a.isUnder !== undefined ? a.isUnder : a.id ) - (b.isUnder !== undefined ? b.isUnder : b.id )
  })
  console.log(commentsForThisPosting);
  // if (comments[posting.id - 1] !== undefined) {
  return (
    <>
      {commentAPI.map((postings, i) => (
        <ul key={`comment${posting.id}${postings.id}`}>
          <li>
            {postings.isUnder ? " [Under comment]: " : "[comment]" }
            {postings.title}
            [id]:
            {postings.id}
          </li>
          {/* <Like 
        posting={postings}
        currentUser={currentUser}
        setGlobalState={setGlobalState}
      />
          <Edit
            posting={commentsForThisPosting}
            globalState={globalState}
            setGlobalState={setGlobalState}
            indexOfCommentOnThisPosting={i}
            thisComment={comments.find(x => x === postings)}
            idOfComment={comments.indexOf(postings)}
            currentUser={currentUser}
          />
          <Remove
            isComment={isComment}
            setIsComment={setIsComment}
            currentUser={currentUser}
            setGlobalState={setGlobalState}
            thisComment={comments.find(x => x === postings)}
            postingId={posting.id}
            commentOwner={postings.userWritten}
          /> */}
          {/* {(postings.isUnder !== undefined) ||
          <Reply
            posting={postings}
            comments={commentStorage.getReplyFromComment(postings)}
            globalState={globalState}
            setGlobalState={setGlobalState}
            currentUser={currentUser}
            replyIsTrue={true}
            indexOfCommentOnThisPosting={i}
            thisComment={comments.find(x => x === postings)}
            idOfComment={comments.indexOf(postings)}
          />
          }  */}
        </ul>
      ))}
    </>
  );
  // }
  // return "";
}

Comment.propTypes = {
  currentUser: PropTypes.string,
  posting: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    userName: PropTypes.string,
    like: PropTypes.arrayOf(PropTypes.string)
  }),
  comments: PropTypes.arrayOf(PropTypes.object),
  globalState: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  setGlobalState: PropTypes.elementType
};

Comment.defaultProps = {
  currentUser: "",
  posting: [],
  comments: {},
  globalState: 0,
  setGlobalState: 0
};

export default Comment;
