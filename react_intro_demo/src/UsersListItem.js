import React from 'react';

const UsersListItem = ({ user, onDelete, onSelect }) => (
  <li className="list-group-item">
    {/* adding role and tabindex to resolve a11y non-interactive element */}
    <a onClick={() => onSelect(user)} role="link" tabIndex={0}>
      {user.name}
    </a>
    { ' ' }
    <button className="btn btn-warning" onClick={() => onDelete(user)} >Delete</button>
  </li>
);

export default UsersListItem;
