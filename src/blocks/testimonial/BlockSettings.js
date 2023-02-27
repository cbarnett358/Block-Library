import React from "react";

import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {PanelBody, PanelRow, ColorPalette, ColorPicker} from "@wordpress/components"
import {select} from "@wordpress/data";
import BackgroundPicker from "../../components/BackgroundPicker";
import MyRating from "../../components/MyRating";


export default class BlockSettings extends React.Component {
	render(){
		console.log('PROPS!', this.props);
		let {attributes, setAttributes} = this.props;

		let settings = select('core/editor').getEditorSettings();
		console.log('SETTINGS!', settings);

		return (
			<InspectorControls>

				<PanelBody title="Basic" initialOpen={true}>

					<PanelRow>

				<BackgroundPicker label="Quote Background Color"
				color={attributes.backgroundColorClass}
								  setColor={color => setAttributes({backgroundColorClass: color})}
				/>

					<MyRating
						label="Rating"
						value={attributes.starsClass}
						setRating={stars => setAttributes({starsClass: stars})}

				/>

					</PanelRow>
					<PanelRow>
						Border Color
					</PanelRow>
					<PanelRow>
						<ColorPalette
							colors={
								// [
								// 	{name: 'blue', color:'#0000FF'},
								// 	{name: 'red', color:'#FF0000'},
								// ]
								//settings.colors
								// add to existing array
								[
									...settings.colors,
									{name: 'black', color:'#000000'},
								]
							}
							//disableCustomColors={true}
							disableCustomColors={settings.disableCustomColors}
							value={attributes.borderColor}
							onChange={borderColor => setAttributes({borderColor})}
							/>
					</PanelRow>
					<PanelRow>
						Text Color
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.textColor}
							// onChangeComplete={textColor => {console.log('COLOR:', textColor); setAttributes({textColor})}}

							// not in documentation?
							onChangeComplete={colorObj => {setAttributes({textColor: colorObj.hex})}}
							disableAlpha
						/>
					</PanelRow>

				</PanelBody>
				<PanelColorSettings
					title="Color Settings"
					initialOpen={false}
					colorSettings={ [
						{
							value: attributes.borderColor,
							onChange: (color) => {setAttributes({borderColor: color})},
							label: 'Border Color',
						},
						{
							value: attributes.textColor,
							onChange: (color) => {setAttributes({textColor: color})},
							label: 'Text Color',
							colors: [
								...settings.colors,
								{name: 'White', slug: 'white', color: '#FFFFFF'},
							]
						},
					]}
				/>
			</InspectorControls>
		)
	}
}
