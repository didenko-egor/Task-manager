import React, {Component, PropTypes} from 'react';

export default class User extends Component {
	constructor(props) {
		super(props);

		this.state={
			name:this.props.name
		}
		this.renderUsers = this.renderUsers.bind(this);
		this.hendelSearch = this.hendelSearch.bind(this);
		this.getInitialState = this.getInitialState.bind(this);
		this.getIdUser = this.getIdUser.bind(this);
	}

	/**
	*Метод фильтрации введенных данных по юзерам
	*/
	hendelSearch(event) { //debugger;
		const searchQueray = event.target.value.toLowerCase();
		const displayUser = this.props.name.filter( (el) => {
			const searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQueray) !== -1;
		})

		this.setState({
			displayUser: displayUser
		});

	}

	/**
	* Метод визуализации пользовательских карточек
	*/
	renderUsers(el) { 
		const undefUsers = el !== undefined ? el : this.state.name;
		const blockUser  = undefUsers.map( (elm, id) => { return (
			<div key={id} id={elm.id} className='users-list' >
				{elm.name} {elm.lastName}
				<div className='users-description'>Должность: {elm.position}</div>
			</div>	
			)
		})
		return blockUser ;
	}

	/**
	* Определяем id выбранного пользователя
	*/
	getIdUser(e) {
		const userId = e.target.id;
		return this.props.getUserId(userId);
	}

	getInitialState() {
		return {
			users:this.props.name
		}
	} 

	render() {
		// const {name, userId} = this.props;
		console.log(this.props);
		return (
			<div className='users'>
				<p>Список пользователей</p>
				<div className='search-line'>
					<input placeholder='Найти...' type='text' onChange={this.hendelSearch} />
				</div>
				<div key={this.getIdUser}  onClick={this.getIdUser} >
					{this.renderUsers(this.state.displayUser)}
				</div>
				
			</div>	
		)
	}
}

User.propTypes = {
	name: PropTypes.array.isRequired
}

// <br/>
// <span className='users-description' >
// 	Age: {elm.age} лет. <br/>
// 	hobby: {elm.hobbi}.
// </span>