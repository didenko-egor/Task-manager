import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
// import Page from '../components/Page';
// import User from '../components/User';
import * as pageActions from '../actions/PageActions';
import * as userActions from '../actions/UserActions';

class App extends Component {
	constructor(props) {
		super(props);
		this.pageActions = bindActionCreators( pageActions, props.dispatch);
		this.userActions = bindActionCreators( userActions, props.dispatch);
	}

	render() {
		//console.log(this.props,'app');
		return( 
				<div className='index-page'>
					<div className='logo'/>
					<div className='navigation'>
						<div className='menu-item'>
							<span><Link to='/home'> Home </Link></span>
							<span><Link to='/inbox'> Inbox </Link></span>
							<span><Link to='/about'> About us </Link></span>
							<span><Link to='/table'> Statistical table </Link></span>
							<span><Link to='/tasks'> Tasks </Link></span>
						</div>	
					</div>
					<div className='content'>
						{this.props.children}
					</div>
					
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

export default connect(mapStateToProps) (App);

App.PropTypes = {
	year: PropTypes.string,
	getPhotos: React.PropTypes.func
}

// <User 
// 	name={user.allUser}
// 	getUserId={getUserId}
// 	userId={user.id}
// />
// <Page 
// 	photos={page.photos}
// 	year = {page.year}
// 	getPhotos = {getPhotos}
// 	fetching = {page.fetching}
// 	/>