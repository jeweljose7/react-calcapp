import React, { Component } from 'react';

class Buttons extends Component {
	
  	render() {
    	return (<button id={this.props.element} onClick={this.props.onClick}>{this.props.element}</button>);
    }
}

export default Buttons;