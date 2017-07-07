import React from 'react';

const UsersListItem = ({ user , onDelete, onSelect }) => (
  <li className='list-group-item' >
  	<a onClick={ () => onSelect( user )}>
  	{ user.name }
  	</a>
  	
  	{ ' ' }
  	
  	<button className='btn btn-warning' onClick={ () => onDelete(user) }>Delete</button>
  </li>
);

export default UsersListItem;