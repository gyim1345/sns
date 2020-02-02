import React from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";

function Comment({ posting, comments, globalStateForTestingPurpose, setGlobalStateForTestingPurpose, currentUser }) {
  const commentsOfPosting = comments.filter(el => el.postLId === posting.id);

  return (
    <>
      {commentsOfPosting.map((postings, i) => (
        <ul key={postings.id}>
          <li>
            [comment]:
            {postings.title}
            [id]:
            {i}
          </li>
          <Edit
            posting={commentsOfPosting}
            globalStateForTestingPurpose={globalStateForTestingPurpose}
            setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
            commentId={i}
            indexOfComment={comments.indexOf(postings)}
            currentUser={currentUser}
          />
        </ul>
      ))}
    </>
  );
}

Comment.propTypes = {
  currentUser: PropTypes.string,
  posting: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    userName: PropTypes.string,
    like: PropTypes.arrayOf(PropTypes.string)
  }),
  comments: PropTypes.arrayOf(PropTypes.object),
  globalStateForTestingPurpose: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  setGlobalStateForTestingPurpose: PropTypes.elementType
};

Comment.defaultProps = {
  currentUser: "",
  posting: [],
  comments: {},
  globalStateForTestingPurpose: 0,
  setGlobalStateForTestingPurpose: 0
};


export default Comment;
