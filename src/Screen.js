import React, { Component } from 'react';

import './Screen.css';

class Screen extends Component {

	constructor(props){
		super(props)
		this.state = { 
			mood: this.props.mood,
			oldMood: "",
			counter: 1,
			counterReset: 0,
			n_poops: this.props.poop,
			isClicked: false,
			frameRate: 500 //milliseconds
		 };
	console.log(this.state.mood);
	}


	componentWillReceiveProps(nextProps) {
		if(this.state.isClicked == false){ // if button is clicked dont change animation 
			this.setState({oldMood: this.state.mood});
			this.setState({mood: nextProps.mood});
			this.setState({isClicked: true});
		}
	}

	resetAnimation(mood)
	{	
		if(this.state.counterReset < 5 ){
			this.state.counterReset++;
		}
		else{ 
			this.setState({mood: this.state.oldMood});
			this.setState({counterReset: 1});
			this.setState({isClicked: false}); // reset after animation is done, button can be clicked again
		}	 
	}
	

	changePic() 
	{ 
			if(this.state.mood != "tama" && this.state.mood != "sad"){
				this.resetAnimation(this.state.mood);
			}
		
			if (this.state.counter === 4){
			
				this.setState({ counter: 1 });

			} else {
				this.state.counter++;
			}


			let nextTamaPic = nextTamaPic = "./pics/cropped pics/" + this.state.mood + this.state.counter + ".png";
			
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