import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
  	let pic = this.props.pic;

    return (
      <div className="button">
        <img src={pic} />
      </div>
    )
  }
}


export default Button;