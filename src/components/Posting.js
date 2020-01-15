import React from 'react';
import { Link } from 'react-router-dom';


function Posting({ posting }) {
  return (
      <Link to={`/posting/${posting.id}`}> 
        [Title]:{posting.title} [Id]:{posting.id}
      </Link>
  );
}

export default Posting;