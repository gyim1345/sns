import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

import PostingList from "../components/PostingList";
import { getPostsFromId } from "../apis/post";
import { getCommentFromIdAPI } from "../apis/comment";
import { checkStatus } from "../apis/check";

function PostPageDetail({
  userOfActivePage,
  setUserOfActivePage,
  currentUser,
  setCurrentUser,
  setLoggedIn
}) {
  const { postingId } = useParams();
  const sizeOfPicture = { width: "100%", height: "100%" };
  const [posting, setPosting] = useState([]);
  const [commentAPI, setCommentAPI] = useState([]);
  const getPosting = async () => {
    const { currentUserAPI } = await checkStatus(currentUser);
    // setUserOfActivePage(response);
    setCurrentUser(currentUserAPI);
    const { posts } = await getPostsFromId(postingId);
    setPosting(posts);
    setLoggedIn(true);
  };
  const getcommentAPI = async () => {
    try {
      const response = await getCommentFromIdAPI(postingId);
      setCommentAPI(response);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Internal Error"
      });
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

// PostPageDetail.propTypes = {
//   userOfActivePage: PropTypes.string,
//   setUserOfActivePage: PropTypes.func,
//   currentUser: PropTypes.string
// };

// PostPageDetail.defaultProps = {
//   userOfActivePage: "",
//   setUserOfActivePage: "",
//   currentUser: ""
// };

export default PostPageDetail;
