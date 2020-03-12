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
      (a.isUnder !== undefined ? a.isUnder : a.id) -
      (b.isUnder !== undefined ? b.isUnder : b.id)
    );
  });

console.log(commentAPI);
  // 진짜 모르겠다. a 나 b 가 대댓글인지 isUnder이 값이 들어오는지 
  // 확인해서 들어오면(숫자로 들어오니 undefined 인지 확인 
  // 하는것보다 숫자인지 확인해서 들어오는지 확인) 
  // 그 isUnder인 대댓글의 해당 댓글의 id를 반환해서 
  // 쓰고 그냥 댓글이면 그냥 id 값을 써서 sorting을 하게 된다.
  // 대댓글도 그냥 댓글로 취급해서 같은 store 에 저장되어 있다.
  // 단지 isUnder이라는 속성에 부모, 즉 해당 댓글의 id 가 들어가게 된다.

  return (
    <>
      {commentAPI.map((postings, i) => (
        <ul key={`comment${posting.id}${postings.id}`}>
          <div>
            <li css={[displayFlex]}>
              {postings.isUnder && <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
              <div css={[fontBold]}>{postings.userName}</div>
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
