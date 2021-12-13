import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'

registerBlockType( 'ipsl-custom-block/card', {
	apiVersion: 2,
	title: __( 'Unique Card', 'ipsl-custom-block' ),
	parent: [ 'ipsl-custom-block/event-cards' ],
	description: __(
		'Affiche une carte evenement unique',
		'ipsl-custom-block'
	),
	
	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: '.title'
		},
		description: {
			type: 'string',
			source: 'text',
			selector: '.description'
		},
		link: {
			type: 'string',
			source: 'attribute', // Cette fois on récupère un attribut
			selector: 'a',       // Dans une balise <a>
			attribute: 'href',
		},
		date: {
			type: 'string',
			source: 'text',
				selector: '.date'
		},
		day: {
			type: 'string',
			source: 'text',
				selector: '.day'
		},
		month: {
			type: 'string',
			source: 'text',
				selector: '.month'
		},
		pictureID: { // L'identifiant de l'image
			type: 'number',
			default: null,
		},
		pictureURL: { // L'URL de l'image
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		pictureAlt: { // Le texte alternatif de l'image
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		},
		
	},
	edit: Edit,
	save,
} )
