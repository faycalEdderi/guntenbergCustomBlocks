import { __ } from '@wordpress/i18n'
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'
import { Placeholder, Button } from '@wordpress/components'

import './editor.scss'

export default function Edit( props ) {
	const blockProps = useBlockProps()

	// Attribution des informations de l'image
	const onSelectImage = picture => {

		console.log(picture) // Afficher les informations récupérées de l'image

		props.setAttributes( {
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		})
	}

	// Effacement des données de l'image
	const onRemoveImage = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		})
	}
	const onChangeTitle = event => {
		props.setAttributes({ title: event.target.value })
	}
	const onChangeLink = event => {
		props.setAttributes({ link: event.target.value })
	}

	const onChangeResume = event => {
		props.setAttributes({ description: event.target.value })
	}
	const onChangeDate = event => {
		props.setAttributes({ date: event.target.value })
		
		var theDate =new Date(event.target.value);
			//console.log( theDate.getDate())

			props.setAttributes({ day: theDate.getDate() })
			props.setAttributes({ month: theDate.getMonth() + 1 })
		
	}

	return (
		<div { ...blockProps }>
			
			<div class="input-group mb-3">
				<input
					className='form-control'
					value={ props.attributes.title }
					onChange={ onChangeTitle }
					placeholder={__('Title', 'ipsl-custom-block')}
				/>
			
			</div>
			<div class="input-group mb-3">
				<input
					className='form-control'
					value={ props.attributes.link }
					onChange={ onChangeLink }
					placeholder={__('Link', 'ipsl-custom-block')}
				/>	

			</div>
			<div class="input-group mb-3">				
				<textarea
					className='form-control'
					rows="10"
					cols="110"
					value={ props.attributes.description }
					onChange={ onChangeResume }
					placeholder={__('Description', 'ipsl-custom-block')}
				/>

			</div>
			<div class="input-group mb-3">
				<input 
					className='form-control'
					type="date" 
					id="start" 
					name="trip-start"
					value={ props.attributes.date }
					onChange={onChangeDate}
					min="2019-01-01" 
				/>
			</div>
				{ ! props.attributes.pictureID ? (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ onSelectImage }
						allowedTypes={ [ 'image' ] }
						value={ props.attributes.pictureID }
						render={ ( { open } ) => (
							<Placeholder
								icon="images-alt"
								label={ __( 'Photo', 'capitainewp-gut-bases' ) }
								instructions={ __( 'Select a picture', 'capitainewp-gut-bases' ) }
							>
								<Button
									isSecondary
									isLarge
									onClick={ open }
									icon="upload"
								>
									{ __( 'Import', 'capitainewp-gut-bases' ) }
								</Button>
							</Placeholder>
						) }
					/>
				</MediaUploadCheck>

			) : (

				<p className="capitaine-image-wrapper">
					<img
						src={ props.attributes.pictureURL }
						alt={ props.attributes.pictureAlt }
					/>

					{ props.isSelected && (

						<Button
							className="capitaine-remove-image"
							onClick={ onRemoveImage }
							icon="dismiss"
						>
							{ __( 'Remove picture', 'capitainewp-gut-bases' ) }
						</Button>

					) }
				</p>
			) }
		</div>

	)
}
