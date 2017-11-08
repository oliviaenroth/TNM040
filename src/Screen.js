import React, { Component } from 'react';

import './Screen.css';

class Screen extends Component {

	constructor(props){
		super(props)
		this.state = { 
			source: this.props.mood,
			counter: 1,
			frameRate: 500 //milliseconds
		 };
	}

	changePic() 
	{
		if (this.state.counter === 4){
			this.setState({ counter: 1 });
		} else {
			this.state.counter++;
		}

		let nextPic = "./pics/" + this.state.source + this.state.counter + ".png";
		this.setState({
			imgSrc: nextPic
		});
		
	}


	render(){

		return(
			<div id="screen">
				<img src={this.state.imgSrc} alt="frame"/>
			</div>
		)
	}
	componentDidMount(){
		setInterval(this.changePic.bind(this), this.state.frameRate);
		console.log("hej");
	}


}

export default Screen;