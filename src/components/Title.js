import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ word }) => {
  return (
    <div css={[paddingCss]}>
      {word}
    </div>
  );
};

const paddingCss = `
padding-right: 6px;

`
// Message.propTypes = {
//   msg: PropTypes.string.isRequired
// };

export default Title;
