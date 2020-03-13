import React, { useState, useEffect } from "react";
import { getUserInfoAPI } from "../apis/post";
import { css } from "@emotion/core";
import { getRandomUser, AddFollower } from "../apis/TimeLinePageApis";

function UserInfo({ user }) {
  const [info, setInfo] = useState("");
  const [randomUsers, setRandomUsers] = useState([]);
  const userInfo = async () => {
    try {
      const response = await getUserInfoAPI(user);
      setInfo(response);
    } catch (e) {
      console.log(e);
    }
  };

  const callRandomUser = async () => {
    try {
      const response = await getRandomUser(user);
      setRandomUsers(response);
    } catch (e) {
      console.log(e);
    }
  };

  const addClickedFollower = async name => {
    try {
      const response = await AddFollower(name);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userInfo();
    callRandomUser();
  }, []);
  return (
    <>
      <div css={[gridBoxForUser]}>
        <div css={[fix]}>
          <div css={[nameAndPicture]}>
            <img
              src={info.image}
              alt="Smiley face"
              height="50"
              width="50"
              css={[borderRadius]}
            />
            <span css={[name]}>{user}</span>
          </div>
          <span css={[story]}>
            스토리
            <span
              style={{
                marginTop: "10px",
                marginBottom: "4px",
                fontWeight: 350
              }}
            >
              회원님이 팔로우하는 사람들의 스토리가 여기에 표시 안됩니다.
            </span>
          </span>
          <div css={[friends]}>
            <span css={[friendsTitle]}>회원님을 위한 추천</span>

            <div css={[friendsImagesAndNames]}>
              {randomUsers.map((usera, i) => (
                <div key={`randomUser${i}`}>
                  <div css={[friendImageAndName]}>
                    <img
                      src={usera.userURL}
                      alt="Smiley face"
                      height="40"
                      width="40"
                      css={[borderRadius]}
                    />
                    <div css={textBoxForfriendImageAndName}>
                      <span css={[name]}>{usera.name}</span>
                      <span css={[recommendation]}>recommendation</span>
                    </div>

                    <span
                      css={[followButton]}
                      onClick={() => addClickedFollower(usera.name)}
                    >
                      {" "}
                      팔로우{" "}
                    </span>
                  </div>
                </div>
              ))}
              {/* test */}
              <div css={[friendImageAndName]}>
                <img
                  src={info.image}
                  alt="Smiley face"
                  height="40"
                  width="40"
                  css={[borderRadius]}
                />
                <div css={textBoxForfriendImageAndName}>
                  <span css={[name]}>Test</span>
                  <span css={[recommendation]}>recommendation</span>
                </div>

                <span css={[followButton]}> 팔로우 </span>
              </div>

              <div css={[friendImageAndName]}>
                <img
                  src={info.image}
                  alt="Smiley face"
                  height="40"
                  width="40"
                  css={[borderRadius]}
                />
                <div css={textBoxForfriendImageAndName}>
                  <span css={[name]}>Test</span>
                  <span css={[recommendation]}>recommendation</span>
                </div>

                <span css={[followButton]}> 팔로우 </span>
              </div>

              {/* test */}
            </div>
          </div>
          <div css={[dunnoText]}>
            소개-도움말-홍보센터-API-채용정보-개인정보처리방침-약관-위치-인기계정-해시태그-언어
          </div>
          <div css={[dunnoText]}>© 2020 BONGSTAGRAM</div>
        </div>
      </div>
    </>
  );
}

const fix = css`
  position: fixed;
`;

const dunnoText = css`
  color: #c7c7c7;
  max-width: 293px;
  font-size: 12px;
  margin-bottom: 10px;
`;

const followButton = css`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #2196f3;
`;
const recommendation = css`
  margin-left: 12px;
  font-size: 14px;
`;
const textBoxForfriendImageAndName = css`
  display: flex;
  flex-direction: column;
`;

const friendImageAndName = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
`;

const friendsImagesAndNames = css`
  flex-direction: column;
  display: flex;
  margin-top: 16px;
`;

const friendsTitle = css`
  font-weight: 500;
`;

const story = css`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 259px;
  margin-bottom: 18px;
  border: groove;
  padding: 10px 16px 10px 16px;
  color: rgba(var(--f52, 153, 153, 153), 1);
  background-color: white;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;

const friends = css`
  min-height: 100px;
  height: auto;
  width: 259px;
  margin-bottom: 18px;
  border: groove;
  padding: 12px 16px 0px 16px;
  color: rgba(var(--f52, 153, 153, 153), 1);
  background-color: white;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;

const name = css`
  margin-left: 12px;
  color: black;
`;

const nameAndPicture = css`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  padding-left: 5px;
`;
const gridBoxForUser = css`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-left: 30px;
`;

const borderRadius = css`
  border-radius: 50%;
  grid-column-start: 2;
`;

const location33 = css`
  grid-row-start: 3;
  grid-column-start: 3;
`;

const location23 = css`
  grid-row-start: 1;
  grid-column-start: 3;
  font-size: xx-large;
`;

const location43 = css`
  grid-row-start: 3;
  grid-column-start: 4;
`;

// UserInfoHead.propTypes = {
//   userOfActivePage: PropTypes.string
// };

// UserInfoHead.defaultProps = {
//   userOfActivePage: ""
// };

export default UserInfo;
