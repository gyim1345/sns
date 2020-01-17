import React from 'react';
import { Link } from 'react-router-dom';


function Posting({ posting }) {
  return (
    <>
        [Title]:{posting.title} [Id]:{posting.id}
   </>
  );
}

export default Posting;