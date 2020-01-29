import React from "react";
import Edit from "./Edit";

function Comment({ posting, comments, state, setState, globalUser }) {
  const found = comments.filter(el => el.postLId === posting.id);

  if (comments[posting.id - 1] !== undefined) {
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
  }
  return "";
}

export default Comment;
