import React, { Component } from 'react';
import Die from '../Die/Die.js';
import './RollDice.css';

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = { rolling: false };
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler() {
		let rand1 = Math.floor(Math.random() * 6) + 1;
		let rand2 = Math.floor(Math.random() * 6) + 1;
		this.setState({ num1: rand1, num2: rand2, rolling: true });
		//wait one second, then set rolling to false
		setTimeout(() => {
			this.setState({ rolling: false });
		}, 1000);
	}
	render() {
		return (
			<div className="RollDice">
				<div className="RollDice-container">
					<Die rolledDie={this.state.num1} rolling={this.state.rolling} />
					<Die rolledDie={this.state.num2} rolling={this.state.rolling} />
				</div>
				<button onClick={this.clickHandler} disabled={this.state.rolling}>
					{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}

export default RollDice;
