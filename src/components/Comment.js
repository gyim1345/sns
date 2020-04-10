import React from "react";
import { css } from "@emotion/core";
import ModalBoxComment from "./ModalBoxComment";
import ModalBoxReply from "./ModalBoxReply";

function Comment({
  posting,
  currentUser,
  commentAPI,
  setCommentAPI,
  addComment
}) {
  commentAPI.sort((a, b) => {
    return (
      (a.replyToCommentId !== undefined ? a.replyToCommentId : a.id) -
      (b.replyToCommentId !== undefined ? b.replyToCommentId : b.id)
    );
  });

  return (
    <>
      {commentAPI.map((postings, i) => (
        <ul key={`comment${posting.id}${postings.id}`}>
          <div>
            <li css={[displayFlex]}>
              {postings.isUnder && <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
              <div css={[fontBold]}>
                {postings.userName.substring(0, posting.userName.indexOf("@"))}
              </div>
              <div css={[wordBreak]}>{`: ${postings.title}`}</div>
            </li>
          </div>
          <div>
            {postings.isUnder && (
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            )}
            {postings.userName === currentUser && (
              <ModalBoxComment
                postings={postings}
                commentAPI={commentAPI}
                currentUser={currentUser}
                indexOfCommentOnThisPosting={i}
                addComment={addComment}
                setCommentAPI={setCommentAPI}
              />
            )}
            {postings.isUnder !== undefined || (
              <ModalBoxReply
                postings={postings}
                commentAPI={commentAPI}
                currentUser={currentUser}
                indexOfCommentOnThisPosting={i}
                addComment={addComment}
                setCommentAPI={setCommentAPI}
              />
            )}
          </div>
        </ul>
      ))}
    </>
  );
}
const displayFlex = css`
  display: flex;
`;

const wordBreak = css`
  word-break: break-all;
  display: flex;
`;

const fontBold = css`
  font-weight: bold;
`;

// Comment.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.exact({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     imageUrl: PropTypes.string,
//     userName: PropTypes.string,
//     like: PropTypes.arrayOf(PropTypes.string)
//   }),
//   comments: PropTypes.arrayOf(PropTypes.object),
//   commentAPI: PropTypes.oneOfType([PropTypes.array]),
//   setCommentAPI: PropTypes.elementType,
//   addComment: PropTypes.func
// };

// Comment.defaultProps = {
//   currentUser: "",
//   posting: [],
//   comments: {}
// };

export default Comment;
