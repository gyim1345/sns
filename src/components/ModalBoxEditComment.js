import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import Swal from 'sweetalert2';

import { editPostAPI } from '../apis/post';
import { editCommentAPI } from '../apis/comment';


function ModalBoxEditComment({
  clicked,
  posting,
  setPosting,
  currentUser,
  setIsOpenModalBox,
  setCommentAPI,
  indexOfCommentOnThisPosting
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const thisPost = posting[indexOfCommentOnThisPosting];
  const [input, setInput] = useState([thisPost.title]);

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
      const response = await editCommentAPI(
        input,
        posting,
        currentUser,
        indexOfCommentOnThisPosting
      );
      response.Message !== undefined
        ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${response.Message}`
          })
        : setCommentAPI(response);
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
        <div css={[outerBoxCss]}>
          <div css={[innerHeaderCss]}>Edit Title of Your Comment</div>
          <textarea
            type="text"
            value={input}
            onChange={e => onEdit(e)}
            css={[textAreaCss]}
          />
          <div css={[innerButtonBoxCss]}>
            <div css={innerColumnButtonBoxCss}>
              <button type="button" onClick={onClick} css={[buttonSave]}>
                Save
              </button>
              {/* <AccountSetting info={info} userInfo={userInfo} /> */}
              <button
                onClick={closeModal}
                css={[buttonCancel]}
                style={{ margin: 0 }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
const innerColumnButtonBoxCss = css`
  height: 50px;
  display: flex;
  align-items: center;
  margin-right: 15px;
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
const innerButtonBoxCss = css`
  display: FLEX;
  background: white;
  width: 506px;
  justify-content: flex-end;
`;

const outerBoxCss = css`
  display: flex;
  flex-direction: column;
`;

const textAreaCss = css`
  border: none;
  margin-top: 10px;
  font-size: 20px;
  outline: none;
  height: 100px;
  width: 500px;
  padding-left: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;

const button = css`
  background-color: transparent;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  font-size: 18px;
  border-radius: 50%;
  border-radius: 3px;
`;

const buttonSave = css`
  ${button}
  background-color: #0275d8;
  color: white;
  margin-right: 10px;
`;

const buttonCancel = css`
  ${button}
  color: #0275d8;
  background-color: white;
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

export default ModalBoxEditComment;
