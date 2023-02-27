import {addFilter} from '@wordpress/hooks';

function addBorderProps(saveElementProps, blockType, attributes) {

	// only add if they picked a border style
	if (attributes.borderStyle) {
		saveElementProps.style = saveElementProps.style || {};
		saveElementProps.style.borderStyle = attributes.borderStyle;
		saveElementProps.style.borderColor = 'black';
		saveElementProps.style.borderWidth = '2px';
		saveElementProps.style.borderColor = attributes.borderColor;
		saveElementProps.style.borderWidth = attributes.borderWidth + 'px';
		saveElementProps.style.borderColor = attributes.borderColor;










	}

	return saveElementProps;
}

addFilter('blocks.getSaveContent.extraProps', 'cb-blocklibrary/border-control/add-border-props', addBorderProps);

