import React, {useState, useEffect} from 'react';
import pStore from '../stores/postingStore';
import cStore from '../stores/commentStore';
import Posting from './Posting';
import Comment from './Comment';





function PostingList({ stae }) {
  
  let postings = pStore.posts;
  let comments = cStore.comments;
  

  const [ input, setInput ] = useState([comments]);
  const [ inputa, setInputa ] = useState('');
  const [ state, setState ] = useState('');
  
    const onChangeComment = e => {
        setInputa(e.target.value);
    };

    const addComment = (e, postId) => {
      let commentLength = cStore.commentsLength;
        
        cStore.createComment(postId, inputa)
      e.target.value = ' ';
      setInput(' ')
      setInputa(' ')
      setState(commentLength)
      
      }

  return (
    <>
      <ul>
          {postings.map(posting => 
            <li key={posting.id}>
              <Posting posting={posting}/>      
                 <input value={input[posting.id]} onChange={e => onChangeComment(e, posting.id)} />
                 <button onClick={e => addComment(e, posting.id)} id={'buttonAddComment'}>AddComment</button>           
              <Comment posting={posting} comments={comments}/>
            </li>
          )}
      </ul>
    </>
  );
}

export default PostingList;
