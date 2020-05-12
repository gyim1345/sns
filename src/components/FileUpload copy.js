import React, { Fragment, useState } from 'react';
import { css } from '@emotion/core';

import Message from './Message';
import { uploadPicture, uploadUserImage } from '../apis/upload';
import AddButtonSvg from '../svgIcons/AddButtonSvg';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';

const FileUpload = ({ currentUser, posting, setPosting, userInfo }) => {
  const [files, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [message, setMessage] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [input, setInput] = useState('');
  const [inputTag, setInputTag] = useState('');
  const [data, setData] = useState('');
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      setImgURL(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onChangeInput = e => {
    setInput(e.target.value);
  };

  const onChangeTagInput = e => {
    setInputTag(e.target.value);
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
    formData.append('user', currentUser);

    try {
      const fileInfo = await uploadPicture(formData);
      setData(fileInfo)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} css={[formCss]}>
      <div css={[inputInputTagUpload]}>
          Title Of the Post
          <textarea type="text" onChange={onChangeInput} placeholder="Title" />
          Tag for the Post
          <input type="text" onChange={onChangeTagInput} placeholder="Tag" />
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </div>
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
            <img
              id="target"
              src={imgURL}
              style={{
                maxWidth: '500px',
                maxHeight: '500px',
                minWidth: '500px',
                minHeight: '500px'
              }}
            />
          ) : (
            <div css={[emptyImageSpace]}>
              <div css={[emptyInnerImageSpace]}>
                {/* <AddButtonSvg /> */}
                사진을 선택 하십시오
              </div>
            </div>
          )}
        </label>

      </form>
      {data &&
        Swal.fire({
          icon: 'success',
          title: 'File Uploaded',
          text: ''
        }) && <Redirect to={`/`} />}
    </Fragment>
  );
};

const formCss = css`
  display: flex;
`;

const displayNone = css`
  display: none;
`;

const emptyInnerImageSpace = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 400px;
  border-style: dotted;
`;
const emptyImageSpace = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  max-width: 500px;
  max-height: 500px;
  min-width: 500px;
  min-height: 500px;
`;

const inputInputTagUpload = css`
  display: flex;
  text-align-last: center;
  flex-direction: column;
`;

export default FileUpload;
