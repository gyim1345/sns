import React, {useState} from 'react'
import PostingList from '../components/PostingList'
import store from '../stores/postingStore';


function PostPage() {
  const [state, setState] = useState([]);
  const [ input, setInput ] = useState('');

  const onChange = e => {
    setInput(e.target.value);
  };

  const addPost = () => {
    store.createPost(input)
    setState({ 
      id: store.postsLength +1,
      title: input,
    })
  };

  return (
        <div>
        <input value={input} onChange={onChange} />
        <button onClick={addPost} id={'buttonAdd'}>Add</button>
        <PostingList state={state} setState={setState}/>
    </div>
        
  )}


export default PostPage