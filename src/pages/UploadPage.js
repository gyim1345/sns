import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';

import PostingList from '../components/PostingList';
import { getUserTimeLinePosts } from '../apis/TimeLinePageApis';
import { checkStatus } from '../apis/check';
import UserInfo from '../components/UserInfo';
import Footer from '../components/Footer';
import { getUserInfoAPI } from '../apis/PostPage';
import FileUpload from '../components/FileUpload';

function UploadPage({ currentUser, setCurrentUser, setLoggedIn }) {
  const [image, setImage] = useState('');
  const check = async () => {
    const { sessionUserName } = await checkStatus(currentUser);
    const response = await getUserInfoAPI(sessionUserName);
    setCurrentUser(sessionUserName);
    setImage(response.userURL);
    setLoggedIn(true);
  };

  //   const userImage = async () => {
  //     try {
  //         console.log(currentUser)
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };


  useEffect(() => {
    check();
    // userImage();
  }, []);

  return (
    <>
      <div css={[timeLineCss]}></div>
      {/* )} */}
      <div css={uploadOuterBox}>
        <div css={uploadCss}>
          <span>UploadFiles</span>
          <div css={[topCss]}>
            {/* <img css={[imageCss]} src={image} alt="" width={100} height={100} /> */}
            {/* <textarea type="text" placeholder="Title"></textarea> */}
            <FileUpload />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const uploadOuterBox = css`
  display: flex;
  justify-content: center;
`;

const topCss = css`
  display: flex;
`;

const imageCss = css`
  border-radius: 50%;
`;
const spanCss = css`
  width: 30px;
  height: 30px;
`;
const uploadCss = css`
  max-width: 1000px;
  font-size: xx-large;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  background: white;
  align-items: center;
`;
const timeLineCss = css`
  display: flex;
  justify-content: center;
`;

// UploadPage.propTypes = {
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string
// };

// UploadPage.defaultProps = {
//   setUserOfActivePage: "",
//   currentUser: ""
// };

export default UploadPage;
