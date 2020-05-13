import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';

import PostingList from '../components/PostingList';
import { getUserTimeLinePosts } from '../apis/TimeLinePageApis';
import { checkStatus } from '../apis/check';
import UserInfo from '../components/UserInfo';
import Footer from '../components/Footer';
import Fab from '@material-ui/core/Fab';
import ModalBoxAdd from '../components/ModalBoxAdd';
function TimeLinePage({
  setUserOfActivePage,
  currentUser,
  setCurrentUser,
  setLoggedIn
}) {
  const sizeOfPicture = { width: '600px' };
  const [posting, setPosting] = useState([]);
  const getUserTimeLinePostsAPI = async () => {
    const { sessionUserName } = await checkStatus();
    setUserOfActivePage(sessionUserName);
    setCurrentUser(sessionUserName);
    const { posts } = await getUserTimeLinePosts(sessionUserName);
    setPosting(posts);
    setLoggedIn(true);
  };

  useEffect(() => {
    getUserTimeLinePostsAPI();
  }, []);

  return (
    <>
      <div css={[timeLineCss]}>
        <div>
          <PostingList
            posting={posting}
            setPosting={setPosting}
            sizeOfPicture={sizeOfPicture}
            userOfActivePage={currentUser}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </div>
        <UserInfo
          user={currentUser}
          posting={posting}
          setUserOfActivePage={setUserOfActivePage}
          currentUser={currentUser}
        />
        <Fab color="primary" aria-label="add">
          <ModalBoxAdd
            height={50}
            width={38}
            posting={posting}
            setPosting={setPosting}
          />
        </Fab>
      </div>
      {/* )} */}
      <Footer />
    </>
  );
}

const timeLineCss = css`
  margin-left: -300px;
  display: flex;
  justify-content: center;
`;

// TimeLinePage.propTypes = {
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string
// };

// TimeLinePage.defaultProps = {
//   setUserOfActivePage: "",
//   currentUser: ""
// };

export default TimeLinePage;
