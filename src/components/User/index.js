import React, { Component } from 'react';
import styles               from './styles.module.css';
import Avatar               from '../Avatar';
import UserInfo             from '../UserInfo';

class User extends Component {
  constructor(props) {
    super( props );
    this.imageSrc = props.user.imageSrc;
    this.firstName = props.user.firstName;
    this.lastName = props.user.lastName;
  }

  render() {
    return (
        <li className={styles.user}>
          <Avatar src={this.imageSrc}
                  alt="gg"
                  firstName={this.firstName}
                  lastName={this.lastName}
          />
          <UserInfo firstName={this.firstName}
                    lastName={this.lastName}
          />
        </li>
    );
  }
}

export default User;