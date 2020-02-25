import React from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";
import Remove from "./Remove";
import Reply from "./Reply";
import { css } from "@emotion/core";
import Modal from "react-modal";
import ModalBoxComment from "./ModalBoxComment";
import ModalBoxReply from "./ModalBoxReply";

function Comment({
  posting,
  currentUser,
  commentAPI,
  setCommentAPI,
  addComment
}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  commentAPI.sort((a, b) => {
    return (
      (a.isUnder !== undefined ? a.isUnder : a.id) -
      (b.isUnder !== undefined ? b.isUnder : b.id)
    );
  });
  return (
    <>
      {commentAPI.map((postings, i) => (
        <ul key={`comment${posting.id}${postings.id}`}>
          <div>
            <li css={[wordBreak]}>
              {/* {postings.isUnder ? " [Under comment]: " : "[comment]"} */}
              <div css={[fontBold]}>{postings.userName}</div>
              {`: ${postings.title}`}
              {/* [id]:
            {postings.id} */}
            </li>
          </div>
          <div>
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
          {/* <Edit
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
          )} */}
        </ul>
      ))}
    </>
  );
}

const wordBreak = css`
  word-break: break-all;
  display: flex;
`;

const fontBold = css`
  font-weight: bold;
`;

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
