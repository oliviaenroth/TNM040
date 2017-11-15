import React, { Component } from 'react';

import './Screen.css';

class Screen extends Component {

	constructor(props){
		super(props)
		this.state = { 
			source: this.props.mood,
			counter: 1,
			n_poops: 3,
			poopSrc: "poop",
			frameRate: 500 //milliseconds
		 };

	}


	componentWillReceiveProps(nextProps) {
		this.setState({source: nextProps.mood});
	}

	changePic() 
	{
		if (this.state.counter === 4){
			this.setState({ counter: 1 });
		} else {
			this.state.counter++;
		}
		if(this.state.source == "poop"){
			//remove poop
		}
		else if (this.state.source == "heart") {
			//love tama animation
		}
		else if (this.state.source == "food") {
			//eat animation
		}
		
		//animate tama
		let nextTamaPic = "./pics/" + this.state.source + this.state.counter + ".png";

		//animate poops
		let nextPoopPic = "./pics/" + this.state.poopSrc + this.state.counter + ".png";


		this.setState({
			imgSrc: nextTamaPic,
			poopSrc: nextPoopPic
		});
		
	}


	render(){

		let poops = [];
		for(let i=0; i < this.state.n_poops; i++) {
			poops.push(<img classnName="poop" src={this.state.poopSrc} />);
		}
		return(
			<div id="screen">
				<img className="frame" src={this.state.imgSrc} alt="frame"/>
				{poops}
			</div>
		)
	}
	componentDidMount(){
		setInterval(this.changePic.bind(this), this.state.frameRate);
	}


}

export default Screen;