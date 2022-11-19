import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	dieDecider(dieNum) {
		switch (dieNum) {
			case 1:
				return 'one';
			case 2:
				return 'two';
			case 3:
				return 'three';
			case 4:
				return 'four';
			case 5:
				return 'five';
			case 6:
				return 'six';
			default:
				break;
		}
	}
	render() {
		return (
			<div>
				<i className={`fas fa-dice-${this.dieDecider(this.props.rolledDie)} fa-10x `} />
			</div>
		);
	}
}

export default Die;
