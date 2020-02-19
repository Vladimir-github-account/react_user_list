import React, {Component} from 'react';
import styles from './styles.module.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.imageSrc = props.user.imageSrc;
    this.firstName = props.user.firstName;
    this.lastName = props.user.lastName;
    console.log(props);
  }
  render() {
    return (
        <li className={styles.user}>
          <img src={this.imageSrc} alt="gg"/>
          <div className="userInfo">
            <h1>{this.firstName || "fail"}</h1>
            <h2>{this.lastName || "BAD SURNAME"}</h2>
          </div>
        </li>
    );
  }
}

export default User;