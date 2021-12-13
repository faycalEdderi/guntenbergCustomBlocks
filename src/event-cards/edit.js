import { __ } from '@wordpress/i18n'
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

import './editor.scss'

export default function Edit(props) {
	const blockProps = useBlockProps()

	// Liste des blocs autorisés
	const ALLOWED_BLOCKS = [ 'ipsl-custom-block/card' ];

	// Template de blocs
	const BASE_TEMPLATE = [
		[ 'ipsl-custom-block/card', {} ],
		
	];

	return (
		<div { ...blockProps }>
			<img src={ props.attributes.preview }/>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ BASE_TEMPLATE }
				//templateLock="all"
			/>
			
		</div>
	)
}
