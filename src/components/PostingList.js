import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import postingStorage from "../stores/postingStore";
import commentStorage from "../stores/commentStore";
import Posting from "./Posting";
import uStore from "../stores/userStore";
import countStore from "../stores/countStore";
import { getPosts } from "../apis/post"
import { addCommentForPost } from "../apis/comment"

function PostingList({
  posting,
  setPosting,
  sizeOfPicture,
  userOfActivePage,
  follower,
  setUserOfActivePage,
  currentUser,
  commentAPI,
  setCommentAPI
}) {

  const [inputa, setInputa] = useState("");
  const [globalState, setGlobalState] = useState([]);
  const { comments } = commentStorage;
  const [state, setState] = useState([]);
  const [ postWithFollowerPost, setPostWithFollowerPost ] = useState(posting)
  
  const distinguishPostings = () => {
    return postingDetail === undefined ? postingStorage.postList.filter(post => post.userName === userOfActivePage) : [postingDetail]
  }
  
 const checkFollowerPresent = () => {
   return follower !== undefined;
 }

  const addFollowerPostingsToCurrentPostings = () => {
    return follower.forEach(person => postings = [...postings, ...postingStorage.getuserPosts(person)]);
  }
  
  const onChangeComment = e => {
    setInputa(e.target.value);
  };

  const addComment = async (_, postId, inputa, currentUser, indexOfCommentOnThisPosting) => {
    try {
      const response = await addCommentForPost(postId, inputa, currentUser, indexOfCommentOnThisPosting)
      setCommentAPI(response)
      setInputa('')
    } catch (e) { 
      console.log(e)
    }
  }

  // const addComment = (_, postId) => {
  //   commentStorage.createComment(postId, inputa, currentUser);
  //   setGlobalState(Date.now());
  // };

  return (
    <>
      <div>
        {posting!== undefined && posting.map(posting1 => (
          <ul key={posting1.id}>
            <Posting
              posting={posting1}
              postingAll={posting}
              setPosting={setPosting}
              comments={comments}
              globalState={globalState}
              setGlobalState={setGlobalState}
              addComment={addComment}
              onChangeComment={onChangeComment}
              sizeOfPicture={sizeOfPicture}
              userOfActivePage={userOfActivePage}
              setUserOfActivePage={setUserOfActivePage}
              currentUser={currentUser}
              commentAPI={commentAPI}
              setCommentAPI={setCommentAPI}
              postWithFollowerPost={postWithFollowerPost}
              setPostWithFollowerPost={setPostWithFollowerPost}
              
            />
          </ul>
        ))}
      </div>
    </>
  );
}

PostingList.propTypes = {
  userOfActivePage: PropTypes.string,
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string,
  sizeOfPicture: PropTypes.string,
  postingDetail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  follower: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

PostingList.defaultProps = {
  userOfActivePage: "",
  setUserOfActivePage: "",
  currentUser: "",
  sizeOfPicture: 0,
  postingDetail: undefined,
  follower: [""],
};

export default PostingList;
