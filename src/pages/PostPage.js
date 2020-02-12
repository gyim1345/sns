import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import Addpost from "../components/Addpost";
import UserInfoHead from "../components/UserInfoHead";
import {getUserPostOnly} from "../apis/post"

function PostPage({ globalState, setGlobalState, userOfActivePage, setUserOfActivePage, currentUser }) {
  const sizeOfPicture = "40%";
  const [posting, setPosting] = useState([]);
  const [commentAPI, setCommentAPI] = useState([]);
 
  const getPostingOfCurrentUser = async () => {
     const {posts} = await getUserPostOnly(userOfActivePage);
    setPosting(posts)
    // console.log('postPage', posts);

  }
    useEffect(() => {
      getPostingOfCurrentUser()
    }, []);
    
// console.log('postPage', posting);

  return (
    <>
      <UserInfoHead globalState={globalState} userOfActivePage={userOfActivePage} />
      <div>
        <Addpost
          posting={posting}
          setPosting={setPosting}
          globalState={globalState}
          setGlobalState={setGlobalState}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
        />
        <PostingList
          posting={posting}
          setPosting={setPosting}
          sizeOfPicture={sizeOfPicture}
          userOfActivePage={userOfActivePage}
          setUserOfActivePage={setUserOfActivePage}
          currentUser={currentUser}
       
        />
      </div>
    </>
  );
}

PostPage.propTypes = {
  user: PropTypes.string,
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string,
  globalState: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  setGlobalState: PropTypes.elementType
};

PostPage.defaultProps = {
  user: "",
  setUserOfActivePage: {},
  currentUser: "",
  globalState: [],
  setGlobalState: ""
};

export default PostPage;
