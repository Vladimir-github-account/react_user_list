import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import User                 from '../User';
import Spinner              from '../Spinner';
import styles               from './styles.module.css';

class UserList extends Component {
  constructor(props) {
    super( props );
    this.state = {
      users: [],
      isFetching: false,
      error: null,
      limit: 20,
    };
  }

  loadMore= ()=>{
    this.getUsers();
  };

  getUsers(){
    fetch( `http://127.0.0.1:5000/users?offset=${this.state.users.length}&limit=${this.state.limit}` )
    .then( response => response.json() )
     .then( users => {
      console.table(users);
      this.setState( {
                       users: [...this.state.users, ...users],
                       isFetching: false,
                     } );
    } )
     .catch( error => {
      this.setState( {
                       error,
                       isFetching: false
                     } );
    } );
  }

  componentDidMount() {
    this.setState( {
      isFetching: true,
    } );
    setTimeout( () => {
      this.getUsers();
    }, 400 );

  }

  render() {
    const { users } = this.state;
    const userComponents = users.map(
        user => ( <User key={user.id} user={user}>{user.id}</User> )
    );
    if ( this.state.isFetching ) {
      return (
          <Spinner/>
      );
    }
    if ( this.state.error !== null ) {
      return null;
    }
    return (
        <ul className={styles.userList}
        onClick={this.loadMore}>
          {userComponents}
        </ul>
    );
  }
}


UserList.propTypes = {
  limit: PropTypes.number,
};

UserList.defaultProps = {
  limit:40,
};
export default UserList;