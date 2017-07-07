import React from 'react';

const UserDetail = ({ user , onDeselect }) => (
	<div className='well' onClick={ () => onDeselect() }>
		{ user.name }
	</div>	
);

export default UserDetail;