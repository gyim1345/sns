import React, {useState, useEffect} from 'react';
import pStore from '../stores/postingStore';
import cStore from '../stores/commentStore';
import Posting from './Posting';
import Comment from './Comment';
import Remove from './Remove';
import Edit from './Edit';




function PostingList({ state, setState }) {
  
  let postings = pStore.posts;
  let comments = cStore.comments;
  

  const [ input, setInput ] = useState([]);
  const [ inputa, setInputa ] = useState('');
  // const [ state, setState ] = useState('');
  
    const onChangeComment = (e,id) => {
        
        setInputa(e.target.value);
    };

    const addComment = (e, postId) => {
      let commentLength = cStore.commentsLength;
        
      cStore.createComment(postId, inputa)
      // e.target.value = ' ';
      // setInput(...input { postId: {title: ' '}})
      // setInput(inputs=> ({
      //   ...inputs, _comments: inputs[_comments].map( el => el.postLId == postId ? '' : el)
      // })
      // setInputa(' ')
      // input[postId]=''
      // setInput(' ')
      // setInputa('')

      setState(commentLength)
      
      }


      const addLineBreaks = string =>
  string.split('\n').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ));



  return (
    <>
      <ul>
          {postings.map(posting => 
            <li key={posting.id}>
              {addLineBreaks(posting.id.toString())}
              <Posting posting={posting}/>      
              <Edit stateP={posting} state={state} setState={setState}/>
              <Remove stateP={posting} state={state} setState={setState}/>         
              <Comment posting={posting} comments={comments} state={state} setState={setState}/>
                 <input value={input[posting.id]} onChange={e => onChangeComment(e, posting.id)} />
                 <button onClick={e => addComment(e, posting.id)} id={'buttonAddComment'}>AddComment</button> 
            </li>
          
          )}
      </ul>
    </>
  );
}

export default PostingList;
