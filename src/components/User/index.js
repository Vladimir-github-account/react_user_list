import React, { Component } from 'react';
import styles               from './styles.module.css';
import Avatar               from '../Avatar';
import UserInfo             from '../UserInfo';

class User extends Component {
  constructor(props) {
    super( props );
    this.profilePicture = props.user.profilePicture;
    this.firstName = props.user.firstName;
    this.lastName = props.user.lastName;
    this.login = props.user.login;
    this.email = props.user.email;
  }

  render() {
    return (
        <li className={styles.user}>
          <Avatar src={this.profilePicture}
                  alt="gg"
                  firstName={this.firstName}
                  lastName={this.lastName}
          />
          <UserInfo firstName={this.firstName}
                    lastName={this.lastName}
                    login={this.login}
                    email={this.email}
          />
        </li>
    );
  }
}

export default User;