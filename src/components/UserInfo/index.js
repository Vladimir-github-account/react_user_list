import React, { Component } from 'react';
import styles               from './styles.module.css';

class UserInfo extends Component {
  constructor(props) {
    super( props );
    this.firstName = props.firstName || 'User';
    this.lastName = props.lastName || '';
  }

  render() {
    return (
        <div className={styles.userInfo}>
          <h1 className={styles.firstName}>{this.firstName}</h1>
          <h2 className={styles.lastName}>{this.lastName}</h2>
        </div>
    );
  }
}

export default UserInfo;