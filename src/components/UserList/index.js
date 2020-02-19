import React, { Component } from 'react';
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
    };
  }

  componentDidMount() {
    this.setState( {
      isFetching: true,
    } );
    setTimeout( () => {
      fetch( './users.json' )
          .then( response => response.json() )
          .then( users => {
            this.setState( {
              users,
              isFetching: false,
            } );
          } )
          .catch( error => {
            this.setState( {
              error,
              isFetching: false
            } );
          } );
    }, 0 );

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
        <ul className={styles.userList}>
          {userComponents}
        </ul>
    );
  }
}

export default UserList;