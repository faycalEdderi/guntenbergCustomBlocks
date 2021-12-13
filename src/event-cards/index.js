import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './style.scss'

import Edit from './edit'
import save from './save'
import '../card';
	

registerBlockType( 'ipsl-custom-block/event-cards', {
	apiVersion: 2,
	title: __( 'Event Cards', 'ipsl-custom-block' ),

	description: __(
		'Affiche un ensemble de cartes d\'évènements',
		'ipsl-custom-block'
	),
	category: 'text',
	icon: 'insert-before',
	attributes: {
	
		
		preview: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		}, 
		
	},
	example: {
		attributes: {
			preview: require('./card_event.gif')
			
		},
	},
	edit: Edit,
	save,
} )
