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
			frameRate: 500, //milliseconds
			intervalChangePic: undefined,
			animation: this.props.mood,
			score: 0
		 };
	}


	componentWillReceiveProps(nextProps) {
		if(this.state.isClicked === false){ // if button is clicked dont change animation
			this.setState({oldMood: this.state.mood});
			this.setState({mood: nextProps.mood});
			this.setState({animation: nextProps.animation});
			this.setState({isClicked: true});

			if(this.state.n_poops !== nextProps.poop) {
				this.changePoop(nextProps.poop);
			}
		}

		
	}
	resetAnimation(mood)
	{
		if(this.state.counterReset < 4 ){
			this.state.counterReset++;
		}
		else{
			this.setState({mood: this.state.oldMood});
			this.setState({
				animation: "",
				appleSrc: ""
			});
			this.setState({counterReset: 0});
			this.setState({isClicked: false}); // reset after animation is done, button can be clicked again
		}
	}


	changePic()
	{ 
		let frame;
		if(this.state.animation !== "" && this.state.animation !== "poop"){
			frame = this.state.animation;
		}
		else {
			frame = this.state.mood;
			console.log(this.state.mood);
		}

			if((frame !== "tama") && (frame !== "sad")){
				this.resetAnimation(frame);
			}
			if (this.state.mood === "dying" ){
				if (this.state.counter===8 ){ 
					console.log("u iz ded");
					console.log("score: " + this.state.score);
					clearInterval(this.state.intervalChangePic);
					}else{

						this.state.counter++;
					}
				}else{
				if (this.state.counter === 4){

				this.setState({ counter: 1 });
			} 
			else {
				this.state.counter++;
				this.state.score++;
			}
			}
			


			let nextTamaPic = "./pics/cropped pics/" + frame + this.state.counter + ".png";

			//animate poops
			let nextPoopPic = "./pics/cropped pics/poop" + this.state.counter + ".png";

			//animate apple
			if(this.state.animation === "eating"){
				let nextApplePic = "./pics/cropped pics/apple" + this.state.counterReset + ".png";
				this.setState({appleSrc: nextApplePic})
			}
			

			this.setState({
				imgSrc: nextTamaPic,
				poopSrc: nextPoopPic
			});

		
		



	}

	updateProps(){
		if(this.state.isClicked === false){
		//this.state.n_poops = this.props.poop;
		this.state.mood = this.props.mood;
		  }
	}



	changePoop(n) {
		this.setState({n_poops: n});
		this.setState({isClicked: false}); 
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
			<img id="apple" src={this.state.appleSrc} />

			</div>
		)
	}
	componentDidMount(){
		this.state.intervalChangePic = setInterval(this.changePic.bind(this), this.state.frameRate);
		setInterval(this.updateProps.bind(this), this.state.frameRate);
	}


}

export default Screen;
