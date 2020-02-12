import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import userStorage from "../stores/userStore";
import postingStorage from "../stores/postingStore";
import { getUserTimeLinePosts } from "../apis/post"


function TimeLinePage({ setUserOfActivePage, currentUser }) {

  const sizeOfPicture = "40%";
  let follower = [];
  const [posting, setPosting] = useState([])
  const [commentAPI, setCommentAPI] = useState([]);
  const getUserTimeLinePostsAPI = async () => {
    const { posts }= await getUserTimeLinePosts(currentUser);
    setPosting(posts)
    // console.log('Timeline', posts)
    }
  
  useEffect(() => {
    getUserTimeLinePostsAPI()
  }, []);
  // console.log('Timeline', posting)


  // const checkCurrentUserDataPresent = () => {
  //   return currentUser !== undefined;
  // }

  // const getFollowerForCurrentUser = () => {
  //   return follower = userStorage.getFollowerFromUser(currentUser);
  // }

  // const setFollowerIsEmpty =() => {
  //   return follower = [];
  // }

  // checkCurrentUserDataPresent() ? getFollowerForCurrentUser() : setFollowerIsEmpty();

  return (
    <>
      {/* {postingStorage.getuserPosts(currentUser)[0] === undefined ? (
        <li>Go to Your user home and add some stuff RIGHT NOW!</li>
      ) : ( */}
        <div>
          <PostingList
            posting={posting}
            setPosting={setPosting}
            sizeOfPicture={sizeOfPicture}
            userOfActivePage={currentUser}
            follower={follower}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
        
          />
        </div>
      {/* )} */}
    </>
  );
}

TimeLinePage.propTypes = {
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string
};

TimeLinePage.defaultProps = {
  setUserOfActivePage: "",
  currentUser: ""
};

export default TimeLinePage;
