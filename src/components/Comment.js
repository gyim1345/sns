import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import ModalBoxComment from './ModalBoxComment';
import ModalBoxReply from './ModalBoxReply';

function Comment({
  posting,
  currentUser,
  commentAPI,
  setCommentAPI,
  addComment,
  setUserOfActivePage
}) {
  commentAPI.sort((a, b) => {
    return (
      (a.replyToCommentId !== undefined ? a.replyToCommentId : a.id) -
      (b.replyToCommentId !== undefined ? b.replyToCommentId : b.id)
    );
  });

  const changeToUserPage = username => {
    setUserOfActivePage(username);
  };

  return (
    <>
      {commentAPI.map((postings, i) => (
        <ul key={`comment${posting.id}${postings.id}`}>
          <div>
            <li css={[displayFlex]}>
              {postings.replyToCommentId && (
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              )}
              <div css={[fontBold]}>
                <Link
                  to={`/profile/${postings.userName}`}
                  onClick={() => {
                    changeToUserPage(postings.userName);
                  }}
                  css={[linkCss]}
                >
                  {postings.userName.substring(
                    0,
                    postings.userName.indexOf('@')
                  )}
                </Link>
              </div>
              <div css={[wordBreak]}>{`: ${postings.title}`}</div>
            </li>
          </div>
          <div>
            {postings.replyToCommentId && (
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
            {postings.replyToCommentId !== undefined || (
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

const linkCss = css`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: black;
`;

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
