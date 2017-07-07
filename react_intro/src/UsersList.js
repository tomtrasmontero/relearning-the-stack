import React from 'react';
import UsersListItem from './UsersListItem';

const UsersList = ({ users , onDelete, onSelect }) => (
	<ul className='list-group'>
		{ users.map( user => <UsersListItem onSelect={ onSelect } onDelete={ onDelete } key={ user.id} user={ user }/> ) }
	</ul>
);

export default UsersList;