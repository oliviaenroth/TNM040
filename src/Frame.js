import React, { Component } from 'react';

import './Screen.css';

class Frame extends Component {

	render(){
		let pic = this.props.pic;

		return(
			<img src={pic} />
		)
	}
}

export default Frame;