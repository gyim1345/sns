import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import UserInfoHead from '../components/UserInfoHead';
import { getUserPostOnly } from '../apis/post';
import { checkStatus } from '../apis/check';
import ModalBoxAdd from '../components/ModalBoxAdd';
import PostsForPostPage from '../components/PostsForPostPage';
import LogoutSvg from '../svgIcons/LogoutSvg';
import { deleteLoginStatus } from '../apis/login';
import Fab from '@material-ui/core/Fab';

function PostPage({
  setUserOfActivePage,
  currentUser,
  setLoggedIn,
  setCurrentUser,
  loggedIn
}) {
  const [posting, setPosting] = useState([]);
  const { user } = useParams();

  const [info, setInfo] = useState({
    user: undefined,
    postNumber: undefined,
    followerNumber: undefined,
    image: undefined,
    usernickName: undefined,
    userIntroductory: undefined
  });
  const getPostingOfCurrentUser = async () => {
    const { sessionUserName } = await checkStatus(currentUser, user);
    setUserOfActivePage(user);
    setCurrentUser(sessionUserName);
    const { posts } = await getUserPostOnly(user);
    setPosting(posts);
    setLoggedIn(true);
  };

  const logout = () => {
    if (loggedIn === true) {
      setLoggedIn(false);
      setCurrentUser('');
      setUserOfActivePage('');
      loggingOut();
    }
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
    getPostingOfCurrentUser();
  }, [user]);
  return (
    <>
      <div css={[postPageCss]}>
        <UserInfoHead
          user={user}
          info={info}
          setInfo={setInfo}
          posting={posting}
          setUserOfActivePage={setUserOfActivePage}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
          loggedIn={loggedIn}
        />
        <div css={[flexCenterColumn]}>
          {/* <ModalBoxAdd
            posting={posting}
            setPosting={setPosting}
            currentUser={currentUser}
          /> */}
          <PostsForPostPage
            posting={posting}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </div>
        <Fab color="primary" aria-label="add">
          <ModalBoxAdd
            height={50}
            width={38}
            posting={posting}
            setPosting={setPosting}
          />
        </Fab>
      </div>
    </>
  );
}

const postPageCss = css`
  position: relative;
  top: 100px;
`;

const flexCenterColumn = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// PostPage.propTypes = {
//   user: PropTypes.string,
//   userOfActivePage: PropTypes.string,
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string,

// };

// PostPage.defaultProps = {
//   user: "",
//   setUserOfActivePage: {},
//   currentUser: "",

// };

export default PostPage;
