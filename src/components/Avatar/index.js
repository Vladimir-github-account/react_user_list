import React, {Component} from 'react';
import styles from './styles.module.css';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.src = props.src;
  }

  render(){
    return (
        <img src={this.src} alt="gg"/>
    );
  }
}

export default Avatar;