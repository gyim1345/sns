import React from "react";
import Edit from "./Edit";

function Comment({ posting, comments, state, setState }) {
  const found = comments.filter(el => el.postLId === posting.id);

  if (comments[posting.id - 1] !== undefined) {
    return (
      <>
        {found.map((postings, i) => (
          <ul key={posting.id}>
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
            />
          </ul>
        ))}
      </>
    );
  }
  return "";
}

export default Comment;
