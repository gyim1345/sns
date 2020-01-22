import React from 'react';
import PostingList from '../components/PostingList';
import pStore from '../stores/postingStore';
import Addpost from '../components/Addpost';
import uStore from '../stores/userStore';


function UserInfoHead({state, user}) {
  
  const userFollowerNumber = uStore.getFollowerNumberOfUser(user);

  return (
    <>
    <img src="./static/images/profilepicture.png" alt="Smiley face" height="42" width="42"></img>
    &nbsp;&nbsp;&nbsp;{user}&nbsp;&nbsp;&nbsp; 
       <span> 게시물 갯수</span>  
       {pStore.getuserPosts(user).length}
       &nbsp;&nbsp;&nbsp;following 갯수
       {userFollowerNumber}
   </>
  );
}

export default UserInfoHead;
