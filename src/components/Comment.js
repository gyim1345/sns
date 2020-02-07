import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";
import Remove from "./Remove";
import Like from "./Like";

function Comment({ posting, comments, globalState, setGlobalState, currentUser,commentAPI, setCommentAPI }) {
  
  const [isComment, setIsComment] = useState(true);
  const [comm, setComm] = useState([]);

  commentAPI.sort(function(a,b) {
    return (a.isUnder !== undefined ? a.isUnder : a.id ) - (b.isUnder !== undefined ? b.isUnder : b.id )
  })
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
      /> */}
          <Edit
            posting={commentAPI}
            globalState={globalState}
            setGlobalState={setGlobalState}
            indexOfCommentOnThisPosting={i}
            thisComment={comments.find(x => x === postings)}
            idOfComment={comments.indexOf(postings)}
            currentUser={currentUser}
            setCommentAPI={setCommentAPI}
          />
          <Remove
            isComment={isComment}
            setIsComment={setIsComment}
            currentUser={currentUser}
            setGlobalState={setGlobalState}
            thisComment={comments.find(x => x === postings)}
            postingId={posting.id}
            commentOwner={postings.userWritten}
          />
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
