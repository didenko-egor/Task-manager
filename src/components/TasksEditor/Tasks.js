import React, {Component} from 'react';

export default class Tasks extends Component {
	constructor(props) {
			super(props);
		}

	render() {
		return (
			<div className='tasks'>
				{this.props.children}
			</div>	
		)
	}	
}