import React from "react";
import PropTypes from "prop-types";
import { getChangeLike } from "../apis/post";

const Like = ({ posting, setPosting, currentUser, postingAll }) => {
  const changeLikeOnClick = async () => {
    try {
      const response = await getChangeLike(posting, currentUser, postingAll);
      setPosting(response);
    } catch (e) {
      console.log(e);
    }
  };

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
  );
};

Like.propTypes = {
  currentUser: PropTypes.string,
  posting: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    userName: PropTypes.string,
    like: PropTypes.arrayOf(PropTypes.string)
  }),
  postingAll: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  comments: PropTypes.arrayOf(PropTypes.object),
  setPosting: PropTypes.elementType,
  addComment: PropTypes.elementType,
  onChangeComment: PropTypes.elementType,
  commentAPI: PropTypes.oneOfType([PropTypes.array]),
  setCommentAPI: PropTypes.elementType
};

export default Like;
