import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import Swal from 'sweetalert2';

import { editPostAPI } from '../apis/post';

function ModalBoxEdit({
  clicked,
  posting,
  setPosting,
  currentUser,
  setIsOpenModalBox,
  postingAll
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = useState([posting.title]);

  const closeModal = () => {
    setIsOpen(false);
    setIsOpenModalBox(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    openModal();
  }, [clicked]);

  const onEdit = e => {
    setInput(e.target.value);
  };

  const onClick = async () => {
    closeModal();
    try {
      const response = await editPostAPI(input, posting, currentUser);
      const index = postingAll.findIndex(x => x === posting);
      response.Message !== undefined
        ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${response.Message}`
          })
        : setPosting([
            ...postingAll.slice(0, index),
            ...response,
            ...postingAll.slice(index + 1)
          ]);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Internal Error'
      });
    }
  };

  return (
    <>
      {/* <SettingSvg openModal={openModal} /> */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <textarea
          type="text"
          value={input}
          onChange={e => onEdit(e)}
          css={[textAreaCss]}
        />
        <button type="button" onClick={onClick} css={[button]}>
          Save
        </button>
        {/* <AccountSetting info={info} userInfo={userInfo} /> */}
        <button onClick={closeModal} css={[button]} style={{ margin: 0 }}>
          close
        </button>
      </Modal>
    </>
  );
}

const textAreaCss = css`
  font-size: 20px;
  outline: none;
  height: 100px;
  width: 500px;
`;

const button = css`
  background-color: transparent;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  min-width: 300px;
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
  flex-direction: column;
`;

const marginLeft0 = css`
  margin-left: 0px;
  background-color: transparent;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default ModalBoxEdit;
