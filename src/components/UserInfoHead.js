import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

import { Link, Redirect } from 'react-router-dom';
import { css } from '@emotion/core';

import LogoutSvg from '../svgIcons/LogoutSvg';
import { getUserInfoAPI } from '../apis/PostPage';
import ModalBoxSetting from './ModalBoxSetting';
import { deleteLoginStatus } from '../apis/login';

function UserInfoHead({
  user,
  info,
  setInfo,
  posting,
  setLoggedIn,
  setCurrentUser,
  setUserOfActivePage,
  loggedIn
}) {
  const userInfo = async () => {
    try {
      const response = await getUserInfoAPI(user);
      setInfo(response);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Internal Error'
      });
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setCurrentUser('');
    setUserOfActivePage('');
    loggingOut();
  };

  const loggingOut = async () => {
    try {
      await deleteLoginStatus();
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Internal Error'
      });
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
            src={info.userURL}
            alt="Smiley face"
            height="150"
            width="150"
            css={[borderRadius]}
          />
        </div>
        <div css={[textArea]}>
          <div css={[row1]}>
            <span css={[location23]}>
              {' '}
              {info.name && info.name.substring(0, info.name.indexOf('@'))}{' '}
            </span>
            {/* <button css={[button]}>메시지 보내기</button> */}
            <ModalBoxSetting info={info} userInfo={userInfo} />
            <Link to="/" onClick={logout}>
              <LogoutSvg />
            </Link>
            {/* {!loggedIn && <Redirect to="/" />} */}
          </div>
          <div css={[row2]}>
            <span css={[location33]}>
              {' '}
              게시물{' '}
              <span style={{ fontWeight: 'bold' }}>{info.postNumber}</span>
            </span>
            <span css={[location43]}>
              {' '}
              팔로우{' '}
              <span style={{ fontWeight: 'bold' }}>{info.followerNumber}</span>
            </span>
            <span css={[location43]}>
              {' '}
              팔로워 <span style={{ fontWeight: 'bold' }}>0</span>
            </span>
          </div>
          <div css={[row3]}>
            <span css={[row3Name]}>{info.nickName}</span>
            <span css={[introductory]}>{info.introductory}</span>
          </div>
        </div>
      </div>
    </>
  );
}

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
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
  margin-bottom: 45px;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
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
