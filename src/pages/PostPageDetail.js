import React from "react";
import { useParams } from "react-router-dom";
import postStore from "../stores/postingStore";
import PostingList from "../components/PostingList";

function PostPageDetail({state, setState, user}) {
  const { postingId } = useParams();
  const size = "80%";
  const postingDetail = postStore.getPost(postingId);

  return (
    <div>
      <PostingList postingDetail={postingDetail} size={size} user={user} />
      {/* <Test />       */}
    </div>
  );
}

export default PostPageDetail;
