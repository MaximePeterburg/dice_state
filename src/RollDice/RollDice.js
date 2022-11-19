import React, { Component } from 'react';
import Die from '../Die/Die.js';

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler() {
		let rand1 = Math.floor(Math.random() * 6) + 1;
		let rand2 = Math.floor(Math.random() * 6) + 1;
		this.setState({ num1: rand1, num2: rand2 });
	}
	render() {
		return (
			<div>
				<Die rolledDie={this.state.num1} />
				<Die rolledDie={this.state.num2} />
				<button onClick={this.clickHandler}>Roll Dice</button>
			</div>
		);
	}
}

export default RollDice;
