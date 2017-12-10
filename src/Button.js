import React, { Component } from 'react';

import './Button.css';

class Button extends Component {

	updateMood(){
		this.props.onClick(this.props.id);
	}

  render() {
		let pic = this.props.pic_pressed;

		if (this.props.isPressed === false) {
			pic = this.props.pic;
		}

    return (
      <div className="button" onClick={this.updateMood.bind(this)} >
        <img src={pic} alt=""/>
      </div>
    )
  }
}

export default Button;
