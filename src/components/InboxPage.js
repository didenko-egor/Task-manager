import React, {Component} 	  from 'react';
import { connect }        	  from 'react-redux';
import users              	  from '../init/users';
import User               	  from '../components/User';
import * as userActions   	  from '../actions/UserActions';
import { bindActionCreators } from 'redux';


class InboxPage extends Component {
	constructor(props) {
		super(props);

		this.userActions = bindActionCreators( userActions, props.dispatch);
	}

	getInitialState() {
		return {
			users
		}
	}


	render() {
		const { user} = this.props
		const {getUserId} = this.userActions;
		// console.log(users,'users');
		return (
			<div  className='indox-page'>
				<h3>Пользователи</h3>
				<User 
					name={user.allUser}
					getUserId={getUserId}
					userId={user.id}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		page: state.page,
		user: state.user
	}
}

export default connect(mapStateToProps) (InboxPage);
