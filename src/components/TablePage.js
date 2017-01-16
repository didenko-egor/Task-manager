import React, {Component} 	  from 'react';
import {position,
		pizzeria,
		rating,
		quality,
		service,
		purity,
		weeks,
		ratingWeeks,
		problems} from '../init/tableSorse/Tables';	

export default class TablePage extends Component {
	constructor(props) {
		super(props);
		this.getTitleTable = this.getTitleTable.bind(this);
		this.getDataTable = this.getDataTable.bind(this);
	}

	getDataTable(el) { 
		const rest = [];
		rest.push(el);
		const cells = rest.map((elm) => { 
			console.log('elm',elm);
				for(var data in elm) {
					data === 'data' ? elm[data].map((el,id) => {
						return(<tr key={`${id}${el}`}><td >{el}</td></tr>)
						}	
					)
					: [];
				}
			})
		return cells;
	}
	
	getTitleTable(table) {
		const title = table.map((el,id) => {
				return( 
					<th key={id}>
						{el.title}
					</th>
				)
			}
		)
		return title;
	}

	render() {
		const tbaleMonth = [position, pizzeria, rating];
		const tableWeek = [quality, service, purity, weeks, ratingWeeks, problems];
		return (
			<div  className='table-page'>
				<div className='tbale-month'>
					<span>В среднем за 12 недель</span>
				<table>
					<tr>
						{this.getTitleTable(tbaleMonth)}
					</tr>
						{this.getDataTable(tbaleMonth)}
				</table>
				</div>
				<div className='table-week'>
					<span>На прошлой неделеб 11-17 января</span>
				<table>
					<tr>
						{this.getTitleTable(tableWeek)}
					</tr>
					
						{this.getDataTable(tableWeek)}
					
				</table>
				</div>
			</div>
		)
	}
}

