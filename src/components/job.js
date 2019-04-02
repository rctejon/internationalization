import React from 'react';
import {FormattedDate, FormattedRelative,FormattedNumber,FormattedPlural} from 'react-intl';



export default class Job extends React.Component {

  	render() {
		let salary=(
			<td>
				<FormattedPlural
					value={this.props.offer.salary}
					one={this.props.offer.salary+' million'}
					other={this.props.offer.salary+' millions'}
				/>
			</td>
		);
		if(this.props.lan.startsWith('es')){
			salary=(
				<td>
					<FormattedPlural
						value={this.props.offer.salary}
						one={this.props.offer.salary+' millón'}
						other={this.props.offer.salary+' millones'}
					/>
				</td>
			);
		}
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
				{salary}
      			<td>{this.props.offer.city}</td>
      			<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
					<p>
						(<FormattedRelative value={new Date(this.props.offer.date)}/>)
					</p>
				</td>
				<td>
					<FormattedNumber value={this.props.offer.visits}/>
				</td>
  			</tr>
  		);
	}
}