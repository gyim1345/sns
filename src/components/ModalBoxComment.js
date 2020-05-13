import Modal from 'react-modal';
import React from 'react';
import { css } from '@emotion/core';

import ThreeRoundButtonSvg from '../svgIcons/ThreeRoundButtonSvg';
import EditComment from './EditComment';
import RemoveComment from './RemoveComment';

function ModalBoxComment({
  commentAPI,
  indexOfCommentOnThisPosting,
  currentUser,
  setCommentAPI
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ThreeRoundButtonSvg setIsOpen={setIsOpen} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <RemoveComment
          posting={commentAPI}
          currentUser={currentUser}
          indexOfCommentOnThisPosting={indexOfCommentOnThisPosting}
          setCommentAPI={setCommentAPI}
        />
        <EditComment
          posting={commentAPI}
          indexOfCommentOnThisPosting={indexOfCommentOnThisPosting}
          currentUser={currentUser}
          setCommentAPI={setCommentAPI}
          setIsOpen={setIsOpen}
        />
        <button onClick={closeModal} css={[marginLeft0]}>
          닫기
        </button>
      </Modal>
    </>
  );
}

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
  flex-direction: column;
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

export default ModalBoxComment;
