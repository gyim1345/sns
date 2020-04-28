import Modal from 'react-modal';
import React from 'react';
import { css } from '@emotion/core';

import SettingSvg from '../svgIcons/SettingSvg';
import AccountSetting from './AccountSetting';

function ModalBoxSetting({ userInfo, info }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button css={[button]} onClick={openModal}>
        {' '}
        프로필 수정
      </button>
      {/* <SettingSvg openModal={openModal} /> */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <span css={[spanCss]}>Account Setting</span>
        <AccountSetting info={info} userInfo={userInfo} />
        <button onClick={closeModal} css={[marginLeft0]} style={{ margin: 0 }}>
          close
        </button>
      </Modal>
    </>
  );
}

const button = css`
  background-color: transparent;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: rgba(var(--f07, 38, 38, 38), 1);
  padding: 0px 12px;
  margin-right: 25px;
`;

const spanCss = css`
  font-weight: bold;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.26);
  border-color: lightgray;
  margin-top: 0;
  padding: 10px;
  color: rgba(var(--i1d, 38, 38, 38), 1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
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
  flex-direction: column;
`;

const marginLeft0 = css`
  margin-left: 0px;
  background-color: transparent;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: #0275d8;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default ModalBoxSetting;
