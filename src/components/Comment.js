import React from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";

function Comment({ posting, comments, state, setState, globalUser }) {
  const found = comments.filter(el => el.postLId === posting.id);

  // if (comments[posting.id - 1] !== undefined) {
  return (
    <>
      {found.map((postings, i) => (
        <ul key={postings.id}>
          <li>
            [comment]:
            {postings.title}
            [id]:
            {i}
          </li>
          <Edit
            stateP={found}
            state={state}
            setState={setState}
            cid={i}
            indexC={comments.indexOf(postings)}
            globalUser={globalUser}
          />
        </ul>
      ))}
    </>
  );
  // }
  // return "";
}

Comment.propTypes = {
  globalUser: PropTypes.string,
  posting: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    userName: PropTypes.string,
    like: PropTypes.arrayOf(PropTypes.string)
  }),
  comments: PropTypes.arrayOf(PropTypes.object),
  state: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  setState: PropTypes.elementType
};

Comment.defaultProps = {
  globalUser: "",
  posting: [],
  comments: {},
  state: 0,
  setState: 0
};


export default Comment;
