import React, { Component } from 'react';
import styles               from './styles.module.css';

class UserInfo extends Component {
  constructor(props) {
    super( props );
    this.firstName = props.firstName || 'User';
    this.lastName = props.lastName || '';
    this.login = props.login || '';
    this.email = props.email || '';
  }

  render() {
    return (
        <div className={styles.userInfo}>
          <h1 className={styles.name}>{`${this.firstName} ${this.lastName}`}</h1>
          <h2 className={styles.login}>Public name {this.login}</h2>
          <h2 className={styles.email}>{this.email}</h2>
        </div>
    );
  }
}

export default UserInfo;