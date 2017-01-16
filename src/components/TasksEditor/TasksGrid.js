import React, {Component} from 'react';
import Tasks              from './Tasks';
//import * as uid           from 'uuid';

export default class TasksGrid extends Component {
	constructor(props) {
		super(props);
		this.renderTasks = this.renderTasks.bind(this);
	}

	renderTasks(e) { debugger;
		//const randomId = () => uid.v4();
		const tasksBlock = e.map( (el,ids) => {
			console.log(el.id);
			return(
				<Tasks key={`${e.id}${ids}`} >
					<div className='title'>{el.titleTask}</div>
					<div className='description'>{el.descriptionTask}</div>
				</Tasks>
			)
		});
		return tasksBlock;
	}

	render() {
		const {task} = this.props;
		return (
			<div className='tasks-grid'>
				{this.renderTasks(task)}
			</div>	
		)
	}	
}