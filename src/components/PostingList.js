import React, { useState } from "react";
import PropTypes from "prop-types";
import postingStore from "../stores/postingStore";
import commentStore from "../stores/commentStore";
import Posting from "./Posting";

function PostingList({
  postingDetail,
  sizeOfPicture,
  userOfActivePage,
  follower,
  setUserOfActivePage,
  currentUser
}) {
  const [input, setInput] = useState("");
  const [globalStateForTestingPurpose, setGlobalStateForTestingPurpose] = useState([]);
  const { comments } = commentStore;
  
  const distinguishPostings = () => {
    return (postingDetail === undefined
      ? postingStore.postList.filter(post => post.userName === userOfActivePage)
      : [postingDetail]
    );
  }
    
  const addFollowerPostingsToCurrentPostings = () => {
    return 
      if (follower !== undefined) {
        follower.forEach(person => postings = [...postings, ...postingStore.getuserPosts(person));
      }
  }
  
  let postings = distinguishPosting();
  addFollowerPostingsToCurrentPostings();

  const onChangeComment = e => {
    setInput(e.target.value);
  };

  const addComment = (_, postId) => {
    commentStore.createComment(postId, input, currentUser);
    setGlobalStateForTestingPurpose(Date.now());
  };

  return (
    <>
      <div>
        {postings.map(posting => (
          <ul key={posting.id}>
            <Posting
              posting={posting}
              comments={comments}
              globalStateForTestingPurpose={globalStateForTestingPurpose}
              setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
              addComment={addComment}
              onChangeComment={onChangeComment}
              sizeOfPicture={sizeOfPicture}
              userOfActivePage={userOfActivePage}
              setUserOfActivePage={setUserOfActivePage}
              currentUser={currentUser}
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
  follower: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

PostingList.defaultProps = {
  userOfActivePage: "",
  setUserOfActivePage: "",
  currentUser: "",
  sizeOfPicture: 0,
  postingDetail: {},
  follower: [""]
};

export default PostingList;
