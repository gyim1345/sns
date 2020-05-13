import React from 'react';

function PostImagesOnly({ imageUrl }) {
  return (
    <div
      className="test"
      style={{
        position: 'relative',
        width: '17vw',
        marginRight: '2%',
        marginBottom: '2%'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginRight: '2%'
        }}
      ></div>
      <div style={{ paddingTop: '100%' }}></div>
    </div>
  );
}

export default PostImagesOnly;
