import Modal from 'react-modal';
import React from 'react';
import { css } from '@emotion/core';

import ThreeRoundButtonSvg from '../svgIcons/ThreeRoundButtonSvg';
import Edit from './Edit';
import Remove from './Remove';

function ModalBox({ posting, setPosting, currentUser, input, postingAll }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ThreeRoundButtonSvg setIsOpen={setIsOpen} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <button onClick={closeModal} css={[buttonCss]}>
          close
        </button>
        <Edit
          posting={posting}
          setPosting={setPosting}
          currentUser={currentUser}
          editInput={input}
          setIsOpenModalBox={setIsOpen}
          postingAll={postingAll}
        />
        <Remove
          posting={posting}
          setPosting={setPosting}
          currentUser={currentUser}
          postingAll={postingAll}
        />
      </Modal>
    </>
  );
}

const buttonCss = css`
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  background-color: white;
  width: 300px;
  height: 48px;
  font-size: 14px;
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
  margin-left: 0px;
`;

export default ModalBox;
