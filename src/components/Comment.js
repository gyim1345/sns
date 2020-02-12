import React from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";
import Remove from "./Remove";
import Reply from "./Reply";

function Comment({
  posting,
  currentUser,
  commentAPI,
  setCommentAPI,
  addComment
}) {
  commentAPI.sort(function(a, b) {
    return (
      (a.isUnder !== undefined ? a.isUnder : a.id) -
      (b.isUnder !== undefined ? b.isUnder : b.id)
    );
  });
  return (
    <>
      {commentAPI.map((postings, i) => (
        <ul key={`comment${posting.id}${postings.id}`}>
          <li>
            {postings.isUnder ? " [Under comment]: " : "[comment]"}
            {postings.title}
            [id]:
            {postings.id}
          </li>
          {/* <Like 
        posting={postings}
        currentUser={currentUser}
      /> */}
          <Edit
            posting={commentAPI}
            indexOfCommentOnThisPosting={i}
            currentUser={currentUser}
            setCommentAPI={setCommentAPI}
          />
          <Remove
            posting={commentAPI}
            currentUser={currentUser}
            indexOfCommentOnThisPosting={i}
            setCommentAPI={setCommentAPI}
          />
          {postings.isUnder !== undefined || (
            <Reply
              posting={postings}
              commentAPI={commentAPI}
              currentUser={currentUser}
              indexOfCommentOnThisPosting={i}
              addComment={addComment}
            />
          )}
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
  commentAPI: PropTypes.oneOfType([PropTypes.array]),
  setCommentAPI: PropTypes.elementType,
  addComment: PropTypes.func
};

Comment.defaultProps = {
  currentUser: "",
  posting: [],
  comments: {}
};

export default Comment;
