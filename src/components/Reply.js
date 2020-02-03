import React, { useState } from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";
import Remove from "./Remove";
import Like from "./Like";
import commentStorage from "../stores/commentStore"

function Reply({ posting, comments, globalState, setGlobalState, currentUser }) {

    const [isComment, setIsComment] = useState(true);
    const commentsForThisPosting = comments;
    return (
      <>
        {commentsForThisPosting.map((postings, i) => (
          <ul key={`reply${i}`}>
            <li>
              [Reply]:
              {postings}
              [id]:
              {i}
            </li>
            {/* <Edit
              posting={commentsForThisPosting}
              globalState={globalState}
              setGlobalState={setGlobalState}
              indexOfCommentOnThisPosting={i}
              thisComment={comments.find(x => x === postings)}
              idOfComment={comments.indexOf(postings)}
              currentUser={currentUser}
            />
            <Remove
              isComment={isComment}
              setIsComment={setIsComment}
              currentUser={currentUser}
              setGlobalState={setGlobalState}
              thisComment={comments.find(x => x === postings)}
              postingId={posting.id}
              commentOwner={postings.userWritten}
            /> */}
        </ul>
      ))}
    </>
  );
  // }
  // return "";
}

export default Reply;



    