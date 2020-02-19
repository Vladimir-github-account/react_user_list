import React, {Component} from 'react';
import UserList           from './components/UserList';
import classNames         from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      isRed: false,
    };
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('did update');

  }

  componentWillUnmount() {

  }

  render() {
    /*const btnClassNames = classNames(styles.button2,
                                     {[styles.backgroundRed]: this.state.isRed});*/
    return (
        <UserList></UserList>
    );
  }
}

export default App;