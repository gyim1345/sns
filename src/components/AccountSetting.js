import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { css } from '@emotion/core';

import { editIntroductoryApi, editNickNameApi } from '../apis/PostPage';
import FileUpload from './FileUpload';

function AccountSetting({ userInfo, info }) {
  const [inputNickName, setInputNickName] = useState('');
  const [inputIntroductory, setInputIntroductory] = useState('');

  const onChangeNickName = e => {
    setInputNickName(e.target.value);
  };

  const editNickName = async () => {
    try {
      await editNickNameApi(inputNickName);
      userInfo();
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Internal Error'
      });
    }
  };

  const onChangeIntroductory = e => {
    setInputIntroductory(e.target.value);
  };

  const editIntroductory = async () => {
    try {
      await editIntroductoryApi(inputIntroductory);
      userInfo();
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
      <div css={[formCss]}>
        <div css={[categorizeInfoCss]}>
          <span css={[paddingTop3px, paddingRight20px]}>사용자 이름</span>
          <span css={[paddingTop15px]}>소개</span>
          <span css={[paddingTopRight]}>프로필 사진 수정</span>
        </div>
        <div css={[inputBoxCss]}>
          <div css={[nickNameCss]}>
            <input
              name="Id"
              defaultValue={info.nickName}
              placeholder={info.nickName}
              css={[inputCss]}
              onChange={onChangeNickName}
            />
            <button
              type="button"
              onClick={editNickName}
              id="editNickName"
              css={[editNickNameButtonCss]}
            >
              수정
            </button>
          </div>
          <div css={[introductoryCss]}>
            <textarea
              name="Id"
              defaultValue={info.introductory}
              placeholder={info.introductory}
              css={[inputCssTextBox]}
              onChange={onChangeIntroductory}
            />
            <button
              type="button"
              onClick={editIntroductory}
              id="editIntroductory"
              css={[editNickNameButtonCss]}
            >
              수정
            </button>
          </div>
          <FileUpload userInfo={userInfo} />
        </div>
      </div>
    </>
  );
}

const paddingTopRight = css`
  padding-top: 36px;
  padding-right: 25px;
`;

const editNickNameButtonCss = css`
  background-color: white;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  color: #262626;
  color: rgba(var(--f07, 38, 38, 38), 1);
  padding: 0.35rem 1rem;
`;

const paddingRight20px = css`
  padding-right: 20px;
`;

const paddingTop3px = css`
  padding-top: 3px;
`;

const paddingTop15px = css`
  padding-top: 15px;
`;

const paddingTop5px = css`
  padding-top: 5px;
`;

const firstCss = css`
  display: flex;
  align-items: center;
`;

const nickNameCss = css`
  display: flex;
  align-items: center;
`;

const introductoryCss = css`
  display: flex;
  align-items: center;
`;

const inputCss = css`
  outline: none;
  padding: 8px;
  border: none;
  border: 1px solid rgba(var(--d0b, 219, 219, 219), 1);
  border-radius: 3px;
`;

const inputCssTextBox = css`
  ${inputCss}
  margin-top: 10px;
  max-width: 163px;
  min-width: 163px;
  min-height: 20px;
`;

const formCss = css`
  display: flex;
  flex-direction: row;
`;
const categorizeInfoCss = css`
  display: flex;
  flex-direction: column;
`;

const inputBoxCss = css`
  display: flex;
  flex-direction: column;
`;

// AddPost.propTypes = {
//   currentUser: PropTypes.string,
//   posting: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   setPosting: PropTypes.func
// };

// AddPost.defaultProps = {
//   currentUser: ""
// };

export default AccountSetting;
