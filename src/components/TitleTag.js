import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import toTop from './toTop';

const TitleTag = ({ word }) => {

  return (
    <div css={[paddingCss]}>
       <Link to={`/SearchPage/${word.replace(/#/, '')}`} onClick={toTop}>
         {word }
          </Link>
    </div>
  );
};

const paddingCss = `
padding-right: 6px;

`

// Message.propTypes = {
//   msg: PropTypes.string.isRequired
// };

export default TitleTag;
