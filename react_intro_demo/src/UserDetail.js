import React from 'react';

const UserDetail = ({ user, onDeselect }) => (
  <div className="well" onClick={onDeselect} role="link" tabIndex={0}>
    { user.name }
  </div>
);

export default UserDetail;
