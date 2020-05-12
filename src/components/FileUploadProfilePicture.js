import React, { Fragment, useState } from 'react';
import { css } from '@emotion/core';

import Message from './Message';
import { uploadUserImage } from '../apis/upload';

const FileUploadProfilePicture = ({ userInfo, info }) => {
  const [files, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [message, setMessage] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [input, setInput] = useState('');
  const [inputTag, setInputTag] = useState('');
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImgURL(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onChange = e => {
    onImageChange(e);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', files);
    formData.append('input', input);
    formData.append('inputTag', inputTag);

    try {
      const data = await uploadUserImage(formData);
      userInfo();
      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit} css={[formCss]}>
        <label>
          <div>
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
              css={[displayNone]}
            />
          </div>

          {imgURL !== '' ? (
            <img src={imgURL} css={[imgCss]} />
          ) : (
            <img src={info.userURL} css={[imgCss]} />
          )}
        </label>
        <input
          type="submit"
          value="수정"
          className="btn btn-primary btn-block mt-4"
          css={inputUploadCss}
        />
      </form>
    </Fragment>
  );
};

const inputUploadCss = css`
  background-color: white;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: #0275d8;
  margin-bottom: 4px;
  width: 58px;
`;
const imgCss = css`
  max-width: 150px;
  max-height: 150px;
  min-width: 150px;
  min-height: 150px;
  padding-right: 44px;
`;

const formCss = css`
  display: flex;
  margin-top: 10px;
`;

const cssTextArea = css`
  width: 400px;
  height: 90%;
`;

const displayNone = css`
  display: none;
`;

const emptyInnerImageSpace = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
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

export default FileUploadProfilePicture;
