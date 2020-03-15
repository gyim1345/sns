import React, { useEffect } from "react";

import { css } from "@emotion/core";

import { getUserInfoAPI } from "../apis/post";
import ModalBoxSetting from "./ModalBoxSetting";

function UserInfoHead({ user, info, setInfo, posting }) {

  const userInfo = async () => {
    try {
      const response = await getUserInfoAPI(user);
      setInfo(response);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userInfo();
  }, [posting]);
  return (
    <>
      <div css={[gridBoxForUserHead]}>
        <div css={[imageBox]}>
          <img
            src={info.image}
            alt="Smiley face"
            height="150"
            width="150"
            css={[borderRadius]}
          />
        </div>
        <div css={[textArea]}>
          <div css={[row1]}>
            <span css={[location23]}> {info.user} </span>
            <button css={[button]}>메시지 보내기</button>
            <ModalBoxSetting info={info} userInfo={userInfo} />
          </div>
          <div css={[row2]}>
            <span css={[location33]}>
              {" "}
              게시물{" "}
              <span style={{ fontWeight: "bold" }}>{info.postNumber}</span>
            </span>
            <span css={[location43]}>
              {" "}
              팔로우{" "}
              <span style={{ fontWeight: "bold" }}>{info.followerNumber}</span>
            </span>
            <span css={[location43]}>
              {" "}
              팔로워 <span style={{ fontWeight: "bold" }}>999,999,999</span>
            </span>
          </div>
          <div css={[row3]}>
            <span css={[row3Name]}>{info.userNickName}</span>
            <span css={[introductory]}>{info.userIntroductory}</span>
          </div>
        </div>
      </div>
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

const introductory = css`
  margin-bottom: 5px;
`;

const row3Name = css`
  font-weight: bold;
  margin-bottom: 5px;
`;

const textArea = css`
  width: 600px;
  margin-top: -15px;
  padding-left: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;

const imageBox = css`
  text-align-last: center;
  width: 300px;
`;

const row1 = css`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const row2 = css`
  margin-bottom: 20px;
`;

const row3 = css`
  display: flex;
  flex-direction: column;
`;

const gridBoxForUserHead = css`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  justify-content: center;
`;

const borderRadius = css`
  border-radius: 50%;

  margin-top: -20px;
`;

const location33 = css`
  margin-right: 40px;
`;

const location23 = css`
  margin-right: 25px;
  font-size: 28px;
`;

const location43 = css`
  margin-right: 40px;
`;

// UserInfoHead.propTypes = {
//   userOfActivePage: PropTypes.string
// };

// UserInfoHead.defaultProps = {
//   userOfActivePage: ""
// };

export default UserInfoHead;
