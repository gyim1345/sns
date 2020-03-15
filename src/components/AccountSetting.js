import React, { useState } from "react";
import { css } from "@emotion/core";
import { editIntroductoryApi, editNickNameApi } from "../apis/PostPage";

function AccountSetting({ userInfo, info }) {
  const [inputNickName, setInputNickName] = useState("");
  const [inputIntroductory, setInputIntroductory] = useState("");

  const onChangeNickName = e => {
    setInputNickName(e.target.value);
  };

  const editNickName = async () => {
    try {
      await editNickNameApi(inputNickName);
      userInfo();
    } catch (e) {
      console.log(e);
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
      console.log(e);
    }
  };
  return (
    <>
      <div css={[formCss]}>
        <div css={[categorizeInfoCss]}>
          <span css={[paddingTop3px, paddingRight20px]}>사용자 이름</span>
          <span css={[paddingTop15px]}>소개</span>
        </div>
        <div css={[inputBoxCss]}>
          <div css={[nickNameCss]}>
            <input
              name="Id"
              defaultValue={info.userNickName}
              placeholder={info.userNickName}
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
              defaultValue={info.userIntroductory}
              placeholder={info.userIntroductory}
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
        </div>
      </div>
    </>
  );
}

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
