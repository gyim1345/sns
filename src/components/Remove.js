import React, { useState, useEffect } from 'react';
import pStore from '../stores/postingStore';
import cStore from '../stores/commentStore';

function Remove({ stateP, state, setState }) {
    
    const removeThis = () => {
        pStore.removePost(stateP.id);
        setState(Date.now())
    }
    
    return (
        <>
            <button onClick={removeThis} id={'buttonRemove'}>Remove</button>
        </>
    )
}


export default Remove;
