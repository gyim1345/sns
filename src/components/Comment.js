import React from 'react';
import Edit from './Edit';
// import { Link } from 'react-router-dom';
  

function Comment({ posting, comments ,state, setState}) {
    const found = comments.filter( el => el.postLId ==posting.id )

    if(comments[posting.id-1] !== undefined)
    return (
      <>
         {found.map((posting,i) => 
            <ul key={i}>
                <li>
                    [comment]:{posting.title} [id]:{i}
                </li>
                <Edit stateP={found} state={state} setState={setState} cid={i} indexC={comments.indexOf(posting)}/>
            </ul>
          )}
        </>
  );
  else return ''
} 

export default Comment;