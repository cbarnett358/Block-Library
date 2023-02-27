/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
// import { useBlockProps } from '@wordpress/block-editor';
// import { RichText } from '@wordpress/block-editor';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck,MyRating,  PlainText,  } from '@wordpress/block-editor';



import { SelectControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import BlockSettings from "./BlockSettings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
//export default function Edit(props) {
	// let attributes = props.attributes;
	// let setAttributes = props.setAttributes;
	//let {attributes, setAttributes} = props;

	let divStyles = {
		// css property : value
		// css property should be camelCase
		borderColor: attributes.borderColor,
		color: attributes.textColor,
	}

	return (
		<div {...useBlockProps({className: attributes.backgroundColorClass, style: divStyles })}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes}/>

			<MyRating
				label="Rating"
				rating={attributes.stars}
				setRating={ stars => setAttributes( { stars } ) }
			/>

			<RichText
				tagName="div" // the tag here is the element output and editable in the editor
				placeholder="Lorem ipsum..."
				allowedFormats={[ 'core/bold', 'core/italic' ]} // allow bold or italic tags
				value={attributes.quote} // existing content from database or an attribute default
				onChange={ (quote) => setAttributes( { quote } )} // save value in the block to be rendered by the save() function
				//onChange={ (value) => setAttributes( { quote: value } )}
			/>
			<div className="quote-profile">
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							onSelect={
								(img) => {
									console.log(img);
									setAttributes( { imgUrl: img.sizes.thumbnail ? img.sizes.thumbnail.url : img.sizes.full.url} )
								}
							}
							render={ ({open}) => <img src={attributes.imgUrl} onClick={open} /> }
						/>
					</MediaUploadCheck>
				</div>
				<div className="text">
					<PlainText
						placeholder="Eric Foreman"
						value={attributes.author}
						onChange={author => setAttributes({author})}
						className="author"
					/>
					<PlainText
						placeholder="Point Place, WI"
						value={attributes.location}
						onChange={location => setAttributes({location})}
						className="location"
					/>
				</div>
			</div>

		</div>
	);
}
