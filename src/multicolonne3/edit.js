
import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'
import './editor.scss'



export default function Edit( props ) {
	const blockProps = useBlockProps()

	const onChangeTitle = event => {
		props.setAttributes({ title: event.target.value })
	}

	const onChangeCol1 = event => {
		props.setAttributes({ col1: event.target.value })
	}
	const onChangeCol2 = event => {
		props.setAttributes({ col2: event.target.value })
	}
	const onChangeCol3 = event => {
		props.setAttributes({ col3: event.target.value })
	}
	return (
		
		 <div  { ...blockProps }>
			 <img src={ props.attributes.cover }/>

				<input
					
					value={ props.attributes.title }
					onChange={ onChangeTitle }
					placeholder={__('Title', 'ipsl-custom-block')}
				/>			
				<textarea
					rows="10"
					cols="150"
					value={ props.attributes.col1 }
					onChange={ onChangeCol1 }
					placeholder={__('Column 1', 'ipsl-custom-block')}
				/>
				<textarea
					rows="10"
					cols="150"
					value={ props.attributes.col2 }
					onChange={  onChangeCol2 }
					placeholder={__('Column 2', 'ipsl-custom-block')}
				/>
				<textarea
					rows="10"
					cols="150"
					value={ props.attributes.col3 }
					onChange={  onChangeCol3 }
					placeholder={__('Column 3', 'ipsl-custom-block')}
				/>
		
		
		</div> 

	)
	
}


 





