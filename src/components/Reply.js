import React, { useState } from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";
import Remove from "./Remove";
import Like from "./Like";
import commentStorage from "../stores/commentStore"

// indexOfCommentOnThisPosting={i}
//             thisComment={comments.find(x => x === postings)}
//             idOfComment={comments.indexOf(postings)}

function Reply({ posting, comments, globalState, setGlobalState, currentUser, indexOfCommentOnThisPosting, idOfComment }) {
  const [input, setInput] = useState("");
  
  const onChange = e => {
    setInput(e.target.value);
  };
    
  const addReplyToComment = (input) => {
    return commentStorage.createComment(posting.postLId, input, currentUser, idOfComment+1 );
  }

  const addReply = () => {
    console.log(posting)
    console.log(comments)
          addReplyToComment(input), 
          setGlobalState(Date.now()), 
          setInput("")
  };

  return (
    <>
      <input value={input} onChange={onChange} />
      <button type="button" onClick={addReply} id="buttonReply">
        AddReply
      </button>
    </>
  );
}

export default Reply;



    