import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import postStore from "../stores/postingStore";
import PostingList from "../components/PostingList";
import {getPostsFromId} from "../apis/post"
import { getCommentFromIdAPI } from "../apis/comment"


function PostPageDetail({ userOfActivePage, setUserOfActivePage, currentUser }) {
  const { postingId } = useParams();
  const sizeOfPicture = "80%";
  const [posting, setPosting] = useState([])
  const [commentAPI, setCommentAPI] = useState([]);
  
  const getPosting = async () => {
     const {posts} = await getPostsFromId(postingId);
     setPosting([posts])
    //  console.log('detail', posts)  
  }
  
  useEffect(() => {
    getPosting();
    getcommentAPI();
    console.log('got');
  }, []);


  const getcommentAPI = async () => {
    try {
      console.log('postingid', postingId)
      const response = await getCommentFromIdAPI(postingId);
      setCommentAPI(response);
      console.log('response', response);
    } catch(e) {
      console.log(e)
    }
  }
console.log(commentAPI)

// useEffect(() => {
//   getcommentAPI();
// }, [])

  
  // console.log('detail', posting)  
  return (
    <div>
      <PostingList
        posting={posting}
        sizeOfPicture={sizeOfPicture}
        userOfActivePage={userOfActivePage}
        setUserOfActivePage={setUserOfActivePage}
        currentUser={currentUser}
        commentAPI={commentAPI}
      />
    </div>
  );
}

PostPageDetail.propTypes = {
  userOfActivePage: PropTypes.string,
  setUserOfActivePage: PropTypes.func,
  currentUser: PropTypes.string
};

PostPageDetail.defaultProps = {
  userOfActivePage: "",
  setUserOfActivePage: "",
  currentUser: ""
};

export default PostPageDetail;
