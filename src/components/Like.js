import React from "react";


const Like = ({ posting, currentUser, setGlobalState }) => {
    const findIfIClickedLike = () => {
        return posting.like.includes(currentUser)
      }
      
      const deleteLike = () => {
        return posting.like = posting.like.filter(el => el !== currentUser);
      }
      
      const addLike = () => {
        return posting.like = [...posting.like, currentUser];
      }
      
      const increaseLike = () => {
        !findIfIClickedLike() ? addLike() : deleteLike();
        setGlobalState(Date.now());
      };

  return (
    <>
    <li>
      Like:
        {posting.like.length}
    </li>
    <button type="button" onClick={increaseLike} id="increaseLike">
      Like
    </button>
    </>
      )
}

export default Like;

