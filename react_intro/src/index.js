import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import UsersList from './UsersList';
import UserDetail from './UserDetail';

const root = document.getElementById('root');



class App extends Component{
	//used for state management?
	constructor(){
		super();
		this.state = { users: []};
		this.onDelete = this.onDelete.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onDeselect = this.onDeselect.bind(this);
	}

	onSelect(user){
		this.setState({ user });
	}

	onDelete(user){
		const users = this.state.users.filter( _user => _user.id !== user.id);
		this.setState({ users });
		
		axios.delete(`/api/users/${user.id}`)
		.then( () => console.log('deleted'));
	}

	onDeselect(){
		this.setState({ user: null });
	}

	componentDidMount(){
		axios.get('/api/users')
		.then( response => {
			console.log(response.data);
			return response.data;
		})
		.then( users => this.setState({ users }));
	}

	render(){
		let view;
		
		if(!this.state.user){
			view = <UsersList users={ this.state.users} onSelect={ this.onSelect } onDelete={ this.onDelete }/>
		} else {
			view = <UserDetail user={ this.state.user } onDeselect={ this.onDeselect} />
		}

		return (
			<div className='container'>
				<h1>React Demo</h1>
				{ view }
			</div>
		);
	}
}

ReactDOM.render( <App /> , root);

