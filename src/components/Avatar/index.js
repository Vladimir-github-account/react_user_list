import React, {Component} from 'react';
import styles             from './styles.module.css';
import ColorHash          from 'color-hash';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src || 'bad image',
      alt: props.alt,
      firstName: props.firstName || ' ',
      lastName: props.lastName || ' ',
      isLoading: false,
      error: null,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.isLoading) {
      this.setState({
                      isLoading: false,
                    });
    }
  }

  componentDidMount() {
    this.setState({
                    isLoading: true,
                  });
  }

  render() {
    if (this.state.isLoading) {
      return (
          <div className={styles.loading}/>
      );
    }

    if (this.state.error !== null) {
      const colorHash = new ColorHash().hex(
          `${this.state.firstName}${this.state.lastName}`);
      return (
          <div className={styles.imageError}
               style={{backgroundColor: colorHash}}>
            {`${this.state.firstName[0]} ${this.state.lastName[0]}`}
          </div>
      );
    }

    return (
        <img className={styles.avatar}
             src={this.state.src}
             onError={() => {
               this.setState({error: true});
             }}
            // onError={(e)=>{e.target.onerror = null; e.target.src="https://i.pinimg.com/originals/dd/59/4e/dd594e241abf617abed2b7d586c19ef9.jpg"}}
             alt={this.state.alt}
        />
    );
  }
}

export default Avatar;