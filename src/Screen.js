import React, { Component } from 'react';

import './Screen.css';

class Screen extends Component {

	constructor(props){
		super(props)
		this.state = { 
			source: this.props.mood,
			counter: 1,
			counterReset: 0,
			n_poops: 4,
			frameRate: 500 //milliseconds
		 };
	console.log(this.state.source);
	}


	componentWillReceiveProps(nextProps) {
		this.setState({source: nextProps.mood});
	}

	resetAnimation(mood)
	{
		if(this.state.source == mood && this.state.source != "tama"){
			console.log(this.state.counterReset);
			if(this.state.counterReset < 5 ){
				this.state.counterReset++;
			}
			else{ 
				this.setState({source: "tama"});
				this.setState({counterReset: 1});
			}	 
		}
	}

	changePic() 
	{
		this.resetAnimation(this.state.source);
		if (this.state.counter === 4){
		
			this.setState({ counter: 1 });

		} else {
			this.state.counter++;
		}


		let nextTamaPic = nextTamaPic = "./pics/cropped pics/" + this.state.source + this.state.counter + ".png";
		/*if(this.state.source == "happy"){
			nextTamaPic = "./pics/cropped pics" + this.state.source + this.state.counter + ".png";
		}
		else if(this.state.source == "sad"){
			//remove poop
		}
		else if (this.state.source == "heart") {
			nextTamaPic = "./pics/" + this.state.source + this.state.counter + ".png";
		}
		else if (this.state.source == "food") {
			//eat animation
		}*/

		//animate poops
		let nextPoopPic = "./pics/cropped pics/poop" + this.state.counter + ".png";


		this.setState({
			imgSrc: nextTamaPic,
			poopSrc: nextPoopPic
		});
		
	}


	render(){

		let poops = [];
		for(let i=0; i < this.state.n_poops; i++) {
			//let style = {order: i+1};
			poops.push(<img className="poop"  src={this.state.poopSrc} />);
		}

		return(
			<div id="screen">
			<div className="poops">
					{poops}
				</div>
				<img className="frame" src={this.state.imgSrc} alt="frame"/>
				
				
			</div>
		)
	}
	componentDidMount(){
		setInterval(this.changePic.bind(this), this.state.frameRate);
	}


}

export default Screen;