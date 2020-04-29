import React, { Fragment, useState, useEffect } from 'react';
import { css } from '@emotion/core';

import { uploadPicture, uploadUserImage } from '../apis/upload';
import AddButtonSvg from '../svgIcons/AddButtonSvg';
import Swal from 'sweetalert2';

const FileUpload = ({
  currentUser,
  closeModal,
  files,
  imgURL,
  posting,
  setPosting
}) => {
  const [input, setInput] = useState('');
  const [inputTag, setInputTag] = useState('');

  const onChangeInput = e => {
    setInput(e.target.value);
  };

  const onChangeTagInput = e => {
    setInputTag(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', files);
    formData.append('input', input);
    formData.append('inputTag', inputTag);
    formData.append('user', currentUser);
    try {
      const fileInfo = await uploadPicture(formData);
      const { posts } = fileInfo;
      setPosting([...posting, posts]);
      closeModal();
      Swal.fire({
        icon: 'success',
        title: 'File Uploaded',
        text: ''
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Internal Error'
      });
    }
  };

  // useEffect(() => {
  //   closeModal()
  // }, [])

  return (
    <Fragment>
      <form onSubmit={onSubmit} css={[formCss]}>
        <div css={[inputInputTagUpload]}>
          <label css={[labelCss]}>
            {imgURL !== '' ? (
              <img
                id="target"
                src={imgURL}
                alt="The official HTML5 Icon"
                style={{
                  maxWidth: '350px',
                  maxHeight: '350px',
                  minWidth: '350px',
                  minHeight: '350px',
                  marginBottom: '10px'
                }}
              />
            ) : (
              <div css={[emptyImageSpace]}>
                <div css={[emptyInnerImageSpace]}>
                  <span>사 진</span>
                </div>
              </div>
            )}
          </label>
          <textarea
            type="text"
            onChange={onChangeInput}
            placeholder="문구입력..."
          />
          <div css={[tagCss]}>
            #Tag
            <input
              type="text"
              onChange={onChangeTagInput}
              placeholder="Input Tag Here"
              css={[inputTagCss]}
            />
          </div>
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </div>
      </form>
    </Fragment>
  );
};

const inputTagCss = css`
  border: none;
  width: 87%;
  outline: none;
  text-align-last: justify;
  padding-left: 5px;
`;
const tagCss = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  color: rgba(var(--fe0, 0, 107, 255), 1);
`;
const labelCss = css`
  display: flex;
  justify-content: center;
`;

const formCss = css`
  display: flex;
`;

const emptyInnerImageSpace = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const emptyImageSpace = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  max-width: 50px;
  max-height: 50px;
  min-width: 50px;
  min-height: 50px;
`;

const inputInputTagUpload = css`
  display: flex;
  text-align-last: center;
  flex-direction: column;
`;

export default FileUpload;
