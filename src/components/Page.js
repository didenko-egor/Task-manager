import React, {Component, PropTypes} from 'react';

export default class Page extends Component {
	constructor(props) {
		super(props);
		this.onYearBtnClick = this.onYearBtnClick.bind(this);
	}

	onYearBtnClick(e) {  
		this.props.getPhotos(e.target.innerText);
	}

	render() {
		const {year, photos, fetching} = this.props
				return(
			<div className='page-user'>
				<p>
					<button onClick={this.onYearBtnClick}>2013</button>
					<button onClick={this.onYearBtnClick}>2014</button>
					<button onClick={this.onYearBtnClick}>2015</button>
					<button onClick={this.onYearBtnClick}>2016</button>
				</p>
				<h3>{year} год.</h3>
				{fetching ?
					<p>Загрузка...</p>
					:
					<p>У тебя {photos.length} фото.</p>}
			</div>
		)
	}
}
Page.propTypes	=	{
		year: PropTypes.numbe,
		photos:	PropTypes.array
}