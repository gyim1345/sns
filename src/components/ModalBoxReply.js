import Modal from 'react-modal';
import React from 'react';
import { css } from '@emotion/core';

import CommentSvg from '../svgIcons/CommentSvg';
import Reply from './Reply';

function ModalBoxReply({
  commentAPI,
  indexOfCommentOnThisPosting,
  postings,
  currentUser,
  addComment
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <CommentSvg setIsOpen={setIsOpen} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <div css={[outerBoxCss]}>
          <div css={[innerHeaderCss]}>Add Reply to Comment</div>
          <div>
            <Reply
              posting={postings}
              commentAPI={commentAPI}
              currentUser={currentUser}
              indexOfCommentOnThisPosting={indexOfCommentOnThisPosting}
              addComment={addComment}
              closeModal={closeModal}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

const outerBoxCss = css`
  display: flex;
  flex-direction: column;
`;

const innerHeaderCss = css`
  font-weight: bold;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.26);
  border-color: lightgray;
  margin-top: 0;
  padding: 10px;
  color: rgba(var(--i1d, 38, 38, 38), 1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
`;

const modalCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 12px;
  outline: none;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column-reverse;
`;

const marginLeft0 = css`
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  background-color: white;
  width: 300px;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
`;

export default ModalBoxReply;
