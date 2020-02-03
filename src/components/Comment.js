import React, { useState } from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";
import Remove from "./Remove";

function Comment({ posting, comments, globalState, setGlobalState, currentUser }) {
  const commentsForThisPosting = comments.filter(el => el.postLId === posting.id);
  const [isComment, setIsComment] = useState(true);
  // if (comments[posting.id - 1] !== undefined) {
  return (
    <>
      {commentsForThisPosting.map((postings, i) => (
        <ul key={`comment${posting.id}${postings.id}`}>
          <li>
            [comment]:
            {postings.title}
            [id]:
            {comments.id}
          </li>
          <Edit
            posting={commentsForThisPosting}
            globalState={globalState}
            setGlobalState={setGlobalState}
            cid={i}
            thisComment={comments.find(x => x === postings)}
            indexC={comments.indexOf(postings)}
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
