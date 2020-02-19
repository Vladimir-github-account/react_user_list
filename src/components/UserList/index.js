import React, {Component} from 'react';
import User               from '../User';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({
                    isFetching: true,
                  });
    fetch('./users.json').then(response => response.json()).then(users => {
      this.setState({
                      users,
                      isFetching: false,
                    });
    }).catch(error => {
      this.setState({
                      error,
                      isFetching: false
                    });
    });
  }

  render() {
    const {users} = this.state;
    const userComponents = users.map(
        user => (<User key={user.id} user={user}>{user.id}</User>)
    );
    return (
        <ul>
          {userComponents}
        </ul>
    );
  }
}

export default UserList;