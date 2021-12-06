import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

registerBlockType( 'ipsl-custom-block/multicolonnes', {
	apiVersion: 2,
	title: __( 'Multicolonnes IPSL', 'ipsl-custom-block' ),
	description: __(
		'Création de 3 paragraphes en colonnes',
		'ipsl-custom-block'
	),
	category: 'text',
	icon: 'awards',
  keywords: [ __( 'first block', 'ipsl-custom-block' ) ],
	supports: {
		html: false,
	},

	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: '.title'
		},
		col1: {
			type: 'string',
			source: 'text',
			selector: '.col1'
		},
		col2: {
			type: 'string',
			source: 'text',
			selector: '.col2'
		},
		col3: {
			type: 'string',
			source: 'text',
			selector: '.col3'
		},
	},
	edit: Edit,
	save,
} )