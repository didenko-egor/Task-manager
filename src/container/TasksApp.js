import React, {Component}     from 'react';
import {connect}              from 'react-redux';
import { bindActionCreators } from 'redux';
import TasksGrid              from './../components/TasksEditor/TasksGrid';
import Button                 from './../components/Button/Button';
import * as taskAction        from './../actions/tasksAction';
import ModalDialog            from './../components/Modal-Dialog/ModalDialog';

class TasksEditor extends Component {
	constructor(props) {
		super(props);

		this.editFieldCreateTask = this.editFieldCreateTask.bind(this);
		this.createTask = this.createTask.bind(this);
		this.taskAction = bindActionCreators( taskAction, props.dispatch);
	}

	editFieldCreateTask(e) {
		const {name, value} = e.target;
		this.taskAction.editFieldTask({name, value, typeActionTask: 'createTask'});
	}

	createTask() {
		this.taskAction.createTask;
	}

	render() {
		const {task} = this.props; debugger;

		return (
			<div >
				<Button
					className='create-button'
					clickHandler={this.taskAction.createTask}
					text='Создать новую задачу'
				/>

				<ModalDialog
						isOpen={task.openDialog}
						isClose={this.taskAction.closeDialog}
						edit={this.createTask}
						valueInput={task.titleTask}
						valueTextArea={task.descriptionTask}
						update={this.editFieldCreateTask}
						executorInput='titleTask'
						executorTextarea='descriptionTask'
						contentLabel='Новая задача'
						saveTask={this.taskAction.saveNewTask}
				/>
				<h3>Список задач</h3>

				<TasksGrid task={task.tasks}/>
			</div>
		)
	}	
}

TasksEditor.defaultProps = {
	tasks : [],
	createTask : {},
	openDialog: false
	/*	editedTask  : false,
	startEditedTask  : false,
	neededCreateNewTask  : false,*/
};

function mapStateToProps(state) {
	return {
		task: state.task,
		tasks: state.tasks
	}
}

export default connect(mapStateToProps) (TasksEditor);