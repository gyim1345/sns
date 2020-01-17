import React, {useState} from 'react'
import PostingList from '../components/PostingList'
import pStore from '../stores/postingStore';
import cStore from '../stores/commentStore';

function Edit({stateP, state, setState, cid, indexC}) {
    const [ edit, setEdit ] = useState([''])
    const input = [];

    const editThis = (e, Id) => {
     
        if(pStore.getPost(stateP.id)===stateP){
        pStore.getPost(stateP.id).title = edit[stateP.id]
        }
        else if(cStore.getComment(indexC+1)===stateP[cid]){
        cStore.getComment(indexC+1).title = edit[stateP.id]
        }
        setState(Date.now())
    }
    
    const onEdit = (e, Id) => {
        console.log(Id)
        edit[Id]= e.target.value
        setEdit(edit)
    }


    return (
        <>  
            <input type="text" value={input[stateP.id]} onChange={e => onEdit(e, stateP.id)} />
            <button onClick={editThis} id={'buttonEdit'}>Edit</button>
        </>
    )


}


export default Edit;