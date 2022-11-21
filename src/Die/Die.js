import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	static defaultProps = {
		rolledDie: 1
	};
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
			<div className="Die-Icon">
				<i
					className={`Die fas fa-dice-${this.dieDecider(this.props.rolledDie)} ${this.props.rolling &&
						'shaking'}`}
				/>
			</div>
		);
	}
}

export default Die;
