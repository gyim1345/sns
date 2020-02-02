import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import postingStore from "../stores/postingStore";
import PostingList from "../components/PostingList";

function PostPageDetail({ userOfActivePage, setUserOfActivePage, currentUser }) {
  const { postingId } = useParams();
  const sizeOfPicture = "80%";
  const postingDetail = postingStore.getPost(postingId);

  return (
    <div>
      <PostingList
        postingDetail={postingDetail}
        sizeOfPicture={sizeOfPicture}
        userOfActivePage={userOfActivePage}
        setUserOfActivePage={setUserOfActivePage}
        currentUser={currentUser}
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
