import Modal from 'react-modal';
import React, { useState } from 'react';
import { css } from '@emotion/core';

import FileUpload from './FileUpload';
import AddButtonSvg from '../svgIcons/AddButtonSvg';
import './ModalBoxAdd.css';

function ModalBoxAdd({ currentUser, height, width, posting, setPosting }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [files, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [imgURL, setImgURL] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onChange = e => {
    onImageChange(e);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImgURL(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <label css={[labelCss]}>
        <input
          type="file"
          name="files"
          onClick={openModal}
          onChange={onChange}
          css={displayNone}
        ></input>
        <AddButtonSvg height={height} width={width} />
      </label>
      {/* <button onClick={openModal} css={[marginLeft0]}>
      </button> */}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} css={modalCss}>
        <h1 css={[h1Css]}>새 게시물</h1>

        <FileUpload
          currentUser={currentUser}
          closeModal={closeModal}
          files={files}
          filename={filename}
          imgURL={imgURL}
          posting={posting}
          setPosting={setPosting}
        />
        <button onClick={closeModal} css={[marginLeft0]} style={{ margin: 0 }}>
          close
        </button>
      </Modal>
    </>
  );
}

const displayNone = css`
  display: none;
`;

const labelCss = css`
  display: flex;
  justify-content: center;
`;

const h1Css = css`
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
  color: rgba(var(--f07, 38, 38, 38), 1);
  margin-: 50px;
  border: none;
    padding-bottom: 4px;
}
`;

export default ModalBoxAdd;
