import React from 'react';
import {   
  BrowserRouter as Router,
  Route,
  Link,
  Switch,useParams } from 'react-router-dom';
import postStore from '../stores/postingStore';
import commentStore from '../stores/commentStore';
import PostingList from '../components/PostingList';


function PostPageDetail() {  
  const { postingId } = useParams();
  // const post = postStore.posts;
  const posting = postStore.getPost(postingId); 
  const commentsA = commentStore.getCommentFromPostId(postingId);// 안되네 모르겠다. 여기서 그냥 쓴다 ㅅㅂ
  const commentsThis = commentStore.comments.filter((el) => el.postLId == postingId);
  
  return (
    <div>
      <PostingList />
    </div>
  )



}

export default PostPageDetail;