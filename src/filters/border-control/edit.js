import {createHigherOrderComponent} from '@wordpress/compose';
import {Fragment} from '@wordpress/element';
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, PanelRow, RangeControl, SelectControl, ColorPalette} from "@wordpress/components";
import {addFilter} from '@wordpress/hooks';
import {select} from "@wordpress/data";
import React from "react";

// create a wrapper function which will receive the block we are trying to wrap

function blockWrapper(WrappedBlock) {
	// return a React component


		return class extends React.Component {
		select() {
			return select('core/editor').getEditorSettings();
		}


			render()
			{


				let {attributes, setAttributes} = this.props;

				let settings = select('core/editor').getEditorSettings();
				console.log('SETTINGS')

				let divStyles = {
					borderStyle: attributes.borderStyle || 'none',
					borderColor: attributes.borderColor || 'black',
					borderWidth: attributes.borderWidth || 0,
					borderRadius: attributes.borderRadius || 0,

				}

				return (
					<Fragment>
						{/* This is panel/toolbar we are adding to each block */}
						<InspectorControls>
							<PanelBody title="Border Controls" initialOpen={false}>
								<PanelRow>
									<SelectControl
										label="Style"
										value={attributes.borderStyle}
										onChange={borderStyle => setAttributes({borderStyle})}
										options={[
											{label: 'None', value: 'none'},
											{label: 'Solid', value: 'solid'},
											{label: 'Dashed', value: 'dashed'},
											{label: 'Dotted', value: 'dotted'},
										]}
									/>
								</PanelRow>


								<PanelRow>
									<RangeControl

										label="Width"
										value={attributes.borderWidth}
										onChange={borderWidth => setAttributes({borderWidth})}
										step={0.5}
										min={0.5}
										max={5}

									/>
								</PanelRow>
								<PanelRow>
									<RangeControl

										label="Radius"
										value={attributes.borderRadius}
										onChange={borderRadius => setAttributes({borderRadius})}
										step={1}
										min={0}
										max={10}

									/>
								</PanelRow>

								<PanelRow>
									<RangeControl

										label="Width"
										value={attributes.borderWidth}
										onChange={borderWidth => setAttributes({borderWidth})}
										step={0.5}
										min={0.5}
										max={5}

									/>
								</PanelRow>
								<PanelRow>
									<ColorPalette


										colors={settings.colors}
										value={attributes.borderColor}
										onChange={borderColor => setAttributes({borderColor})}
									/>
								</PanelRow>
							</PanelBody>
						</InspectorControls>

						{/* This is a wrapper -- WrappedBlock is the block you are editing/wrapping */}
						<div className="wp-block" style={divStyles}>
							<WrappedBlock {...this.props} />
						</div>
					</Fragment>
				)


		}
	}
}

// Higher Order Components is a pretty high-level concept, but here's a good explanation:
// https://reactjs.org/docs/higher-order-components.html
// Note: this is *similar* to what WordPress does, but WordPress does not provide good documentation for this.
const borderComponent = createHigherOrderComponent(blockWrapper, 'border-control');

// register our filter with WordPress
addFilter('editor.BlockEdit', 'cb-blocklibrary/border-control/border-wrapper', borderComponent);
