import React, { Component } from 'react';

import './Bar.css';

export default class bar extends Component {
  render() {
    let n_lights = this.props.n_lights;

    var lights = [];

    for (var i=0; i<n_lights; i++) {
      lights.push(<img class="light" src='./pics/light_on.png'/>);
    }

    for (var i=0; i<(5-n_lights); i++) {
      lights.push(<img class="light" src='./pics/light_off.png'/>);
    }

    return (
      <div className="bar">
      <img class="bar_icon" src={this.props.img1}/>
      {lights}
      <img class="bar_icon" src={this.props.img2}/>
      </div>
    )
  }
}
