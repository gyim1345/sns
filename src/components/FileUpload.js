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
  // const [inputTag, setInputTag] = useState('');

  const onChangeInput = e => {
    setInput(e.target.value);
  };

  // const onChangeTagInput = e => {
  //   setInputTag(e.target.value);
  // };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', files);
    formData.append('input', input);
    let inputTag = input.split(' ').filter(x=> x.includes('#')).map(x=> x.replace(/#/g,''));
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
                  <img
                    id="target"
                    src={'src/images/emptyImage.jpg'}
                    style={{
                      maxWidth: '350px',
                      maxHeight: '350px',
                      minWidth: '350px',
                      minHeight: '350px',
                      marginBottom: '10px'
                    }}
                  />
                </div>
              </div>
            )}
          </label>
          <textarea
            type="text"
            onChange={onChangeInput}
            placeholder="문구입력..."
            css={[textAreaCss]}
          />
          {/* <div css={[tagCss]}>
            #태그
            <input
              type="text"
              onChange={onChangeTagInput}
              placeholder="태그를 입력 해주세요"
              css={[inputTagCss]}
            /> */}
          {/* </div> */}
          <input
            type="submit"
            value="업로드"
            className="btn btn-primary btn-block mt-4"
            css={[uploadBoxCss]}
          />
        </div>
      </form>
    </Fragment>
  );
};

const uploadBoxCss = css`
background-color: transparent;
`;

const textAreaCss = css`
  outline: none;
`;
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
  max-width: 350px;
    max-height: 350px;
    min-width: 350px;
    min-height: 350px;
`;

const inputInputTagUpload = css`
  display: flex;
  flex-direction: column;
`;

export default FileUpload;
