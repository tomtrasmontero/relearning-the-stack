import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// ability to contact the back end
import axios from 'axios';

import UsersList from './UsersList';
import UserDetail from './UserDetail';


const root = document.getElementById('root');

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
    // bind this to method so they have access to it
    this.onDelete = this.onDelete.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onDeselect = this.onDeselect.bind(this);
  }


  componentDidMount() {
    axios.get('/api/users')
      .then(response => response.data)
      .then(users => this.setState({ users }));
  }
  onSelect(user) {
    this.setState({ user });
  }

  onDelete(user) {
    const users = this.state.users.filter(_user => _user.id !== user.id);
    this.setState({ users });

    axios.delete(`/api/users/${user.id}`)
      .then(() => console.log('deleted'));
  }

  onDeselect() {
    this.setState({ user: null });
  }

  render() {
    let view;
    if (!this.state.user) {
      view = <UsersList users={this.state.users} onSelect={this.onSelect} onDelete={this.onDelete} />;
    } else {
      view = <UserDetail user={this.state.user} onDeselect={this.onDeselect} />;
    }

    return (
      <div className="container">
        <h1>React Demo</h1>
        { view }
      </div>
    );
  }
}

ReactDOM.render(<App />, root);
