import React, { Component } from 'react';

export default class Poops extends Component {

	constructor(props){
		super(props);
		this.state = {
			counter: 0,
			imgSrc: 
		}

	}

  render() {
    return (
      <div className="poops">
        <img className="frame" src={this.state.imgSrc} alt="frame"/>
      </div>
    )
  }
}
