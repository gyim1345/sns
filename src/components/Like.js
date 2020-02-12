import React, { useState } from "react";
import {getChangeLike} from "../apis/post"

const Like = ({ posting, setPosting, currentUser, setGlobalState, postWithFollowerPost, setPostWithFollowerPost, postingAll }) => {
    // const findIfIClickedLike = () => {
    //     return posting.like.includes(currentUser)
    // //   }
    // const [ like, setLike ] = useState([])
    // setLike([...like, posting.like]) 
    // console.log(like)
    //   const deleteLike = () => {
    //     return posting.like = posting.like.filter(el => el !== currentUser);
    //   }
      
    //   const addLike = () => {
    //     return posting.like = [...posting.like, currentUser];
    //   }
      
    //   const increaseLike = () => {`
    //     !findIfIClickedLike() ? addLike() : deleteLike();
    //     setGlobalState(Date.now());
    //   };
    console.log(postingAll)
      const changeLikeOnClick = async () =>{
        try{
          console.log(posting)
          const response = await getChangeLike(posting, currentUser, postingAll)
          setPosting(response)
          // setGlobalState(Date.now())
        } catch (e) {
          console.log(e)
        }
      }

  return (
    <>
    <li>
      Like:
        {posting.like.length}
    </li>
    <button type="button" onClick={changeLikeOnClick} id="increaseLike">
      Like
    </button>
    </>
      )
}

export default Like;

