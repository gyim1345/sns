import Modal from 'react-modal';
import React from 'react';
import { css } from '@emotion/core';

import FileUpload from './FileUpload';

function ModalBoxAdd({ posting, setPosting, currentUser }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={openModal} css={[marginLeft0]}>
        AddBong
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <button onClick={closeModal} css={[marginLeft0]} style={{ margin: 0 }}>
          close
        </button>
        <FileUpload
          posting={posting}
          setPosting={setPosting}
          currentUser={currentUser}
        />
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
  flex-direction: column-reverse;
`;

const marginLeft0 = css`
  margin-left: 0px;
  background-color: transparent;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default ModalBoxAdd;
