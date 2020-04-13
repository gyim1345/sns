import React from 'react';

const Profile = ({ id, name }) => {
  return (
    <div>
      <b>{id}</b>&nbsp;
      <span>{name}</span>
    </div>
  );
};

export default Profile;
