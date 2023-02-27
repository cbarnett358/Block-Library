import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SelectControl} from "@wordpress/components";


export default class MyRating extends Component {
	static propTypes = {
	"label": PropTypes.string.isRequired,
	"value": PropTypes.number.isRequired,
	"setRating": PropTypes.func.isRequired,

};

	render() {
		return (
			<SelectControl
				label={this.props.label}
				value={ this.props.rating }
				onChange={ rating => this.props.setRating( parseInt(rating)) }
				options={ [
					{value: 1, label: '*'},
					{value: 2, label: '**'},
					{value: 3, label: '***'},
					{value: 4, label: '****'},
					{value: 5, label: '*****'},
				]}

			/>
		);
				}
}



