import React from 'react';
import {   
  BrowserRouter as Router,
  Route,
  Link,
  Switch,useParams } from 'react-router-dom';
import postStore from '../stores/postingStore';
import commentStore from '../stores/commentStore';
import PostingList from '../components/PostingList';
import Test from '../components/Test';

function PostPageDetail(state, setState) {  
  const { postingId } = useParams();
  // const post = postStore.posts;
  const postingDetail = postStore.getPost(postingId); 
  const commentsA = commentStore.getCommentFromPostId(postingId);// 안되네 모르겠다. 여기서 그냥 쓴다 ㅅㅂ
  const commentsThis = commentStore.comments.filter((el) => el.postLId == postingId);
  console.log(postingDetail)

  return (
    <div>
      <PostingList postingDetail={postingDetail}/>
          {/* <Test />       */}
    </div>
  )



}

export default PostPageDetail;