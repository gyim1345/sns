import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import PostingList from "../components/PostingList";
import { getPostsFromId } from "../apis/post";
import { getCommentFromIdAPI } from "../apis/comment";

function PostPageDetail({
  userOfActivePage,
  setUserOfActivePage,
  currentUser
}) {
  const { postingId } = useParams();
  const sizeOfPicture = "80%";
  const [posting, setPosting] = useState([]);
  const [commentAPI, setCommentAPI] = useState([]);
  const getPosting = async () => {
    const { posts } = await getPostsFromId(postingId);
    setPosting([posts]);
  };
  const getcommentAPI = async () => {
    try {
      const response = await getCommentFromIdAPI(postingId);
      setCommentAPI(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosting();
    getcommentAPI();
  }, []);

  return (
    <div>
      <PostingList
        posting={posting}
        setPosting={setPosting}
        sizeOfPicture={sizeOfPicture}
        userOfActivePage={userOfActivePage}
        setUserOfActivePage={setUserOfActivePage}
        currentUser={currentUser}
        commentAPI={commentAPI}
        setCommentAPI={setCommentAPI}
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
