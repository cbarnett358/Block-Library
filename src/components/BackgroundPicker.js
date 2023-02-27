
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SelectControl} from "@wordpress/components";

class BackgroundPicker extends Component {
	render() {
		return (
			<SelectControl
				label={this.props.label}
				value={ attributes.backgroundColorClass }
				onChange={ backgroundColorClass => { setAttributes( { backgroundColorClass } ) } }
				options={ [
					{value: '', label: 'Default'},
					{value: 'bg-primary-blue', label: 'Primary Blue'},
					{value: 'bg-primary-red', label: 'Primary Red'},
				]}
			/>
		);
	}
}
//not required but makes development easier
BackgroundPicker.propTypes = {
	"label": PropTypes.string,
	"color": PropTypes.string.isRequired,
	"setColor": PropTypes.func.isRequired,
};

export default BackgroundPicker;
