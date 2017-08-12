import React from 'react';
import UsersListItem from './UsersListItem';

const UsersList = ({ users, onDelete, onSelect }) => (
  <ul className="list-group">
    {/* creating a list needs a key for unique id */}
    { users.map(user => <UsersListItem key={user.id} onSelect={onSelect} onDelete={onDelete} user={user} />) }
  </ul>
);

export default UsersList;
