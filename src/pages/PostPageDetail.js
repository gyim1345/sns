import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import postStore from "../stores/postingStore";
import PostingList from "../components/PostingList";

function PostPageDetail({ user, setUser, globalUser }) {
  const { postingId } = useParams();
  const size = "80%";
  const postingDetail = postStore.getPost(postingId);

  return (
    <div>
      <PostingList
        postingDetail={postingDetail}
        size={size}
        user={user}
        setUser={setUser}
        globalUser={globalUser}
      />
    </div>
  );
}

PostPageDetail.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.string,
  globalUser: PropTypes.string
};

PostPageDetail.defaultProps = {
  user: "",
  setUser: "",
  globalUser: ""
};

export default PostPageDetail;
