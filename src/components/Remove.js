import React, {useState, useEffect} from 'react';
import pStore from '../stores/postingStore';
import cStore from '../stores/commentStore';

function Remove ({state}) {
    const [stateRemove, setStateRemove ] = useState(state)
    console.log(state)
    console.log(stateRemove)

    const removeThis = () => {
    //     console.log(state.id)
    // const found = pStore.getPost(state.id)
    // stateRemove = stateRemove.filter( el =>el !== found)
    // console.log({state})
    // setStateRemove(pStore.postsLength);
    pStore.removePost(state.id);
    setStateRemove('') 
    // setStateRemove(...state ,[ state.filter(el => el.id !== state.id )])
}


    return (
        <>
        <button onClick={removeThis} id={'buttonRemove'}>Remove</button> 
        </>
        
        )
}


export default Remove;
