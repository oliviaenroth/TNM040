import React, { Component } from 'react';

import './Screen.css';

class Screen extends Component {

	constructor(props){
		super(props)
		this.state = {
			mood: this.props.mood,
			//oldMood: "",
			counter: 1,
			counterReset: 0,
			n_poops: this.props.poop,
			isClicked: false,
			frameRate: 500, //milliseconds
			intervalChangePic: undefined,
			animation: this.props.animation,
			deathAnimRunning: false,
			score: 0
		};
	}


	componentWillReceiveProps(nextProps) {
		if(this.state.isClicked === false){ // if button is clicked dont change animation
			this.setState({
				oldMood: this.state.mood,
				mood: nextProps.mood,
				animation: nextProps.animation,
				isClicked: true
			});
			this.changePoop(nextProps.poop);
			//if(this.state.n_poops !== nextProps.poop) {
			//}
		}
	}
	resetAnimation(mood)
	{
		if(this.state.counterReset < 4 ){
			this.state.counterReset++;
		}
		else{
			this.setState({mood: this.props.mood});
			this.setState({appleSrc: "" });
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
		}

		if((frame !== "tama") && (frame !== "sad")){
			this.resetAnimation(frame);
		}
		if (this.state.mood === "dying" && this.state.deathAnimRunning == false){ 
				this.setState({counter: 0});
				this.setState({deathAnimRunning: true});
		}
		
			if(this.state.deathAnimRunning == true){
				frame = this.state.mood;
				if (this.state.counter===8 ){ 
					console.log("u iz ded");
					console.log("score: " + this.state.score); 
								document.write("ggggtg");
					clearInterval(this.state.intervalChangePic);
					this.setState({isClicked: true});
				}else if(this.state.deathAnimRunning ===true && this.state.counter !=8){
					this.state.counter++;
				}
			}
			else if(this.state.counter === 4){
			this.setState({ counter: 1 });
			} 
			else {
			this.state.counter++;
			this.state.score++;

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
		//if(this.state.isClicked === false){
			this.state.isClicked = this.props.isClicked;
			this.state.n_poops = this.props.poop;
			this.state.mood = this.props.mood;
			this.state.animation = this.props.animation;
			console.log(this.props.mood);
		}




		changePoop(n){
			this.setState({n_poops: n});
		this.setState({isClicked: false}); //this is where we fuck up?
	}

	render(){
		let poops = [];
		for(let i=0; i < this.state.n_poops; i++) {
			//let style = {order: i+1};
			poops.push(<img className="poop" key={"poop" + i} src={this.state.poopSrc} />);
		}

		return(
		<div id="screen">
		<div className="poops"> {poops} </div>
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
