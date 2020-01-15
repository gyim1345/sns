import React from 'react';
// import { Link } from 'react-router-dom';


function Comment({ posting, comments }) {
    const found = comments.filter( el => el.postLId ==posting.id )
    
    if(comments[posting.id-1] !== undefined)
    return (
      <>
         {found.map((posting,i) => 
            <ul key={i}>
                <li>
                    [comment]:{posting.title} [id]:{posting.postLId}
                </li>
                
            </ul>
          )}
        </>
  );
  else return ''
} 

export default Comment;