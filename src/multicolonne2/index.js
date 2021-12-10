import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'



registerBlockType( 'ipsl-custom-block/double-colonnes', {
	apiVersion: 2,
	title: __( 'Double colonnes IPSL', 'ipsl-custom-block' ),
	description: __(
		'Création de 2 paragraphes en colonnes',
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
		
		cover: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		}, 
		
	},
	example: {
		attributes: {
			cover: require('./multicol2.png')
			
		},
	},

	edit: Edit,
	save
} )