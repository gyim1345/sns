import React, { useState } from "react";
import {getChangeLike} from "../apis/post"

const Like = ({ posting, setPosting, currentUser, setGlobalState, postWithFollowerPost, setPostWithFollowerPost, postingAll }) => {
      const changeLikeOnClick = async () =>{
        try{
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

