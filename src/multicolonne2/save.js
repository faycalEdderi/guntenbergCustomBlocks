import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
// { ...blockProps } 
		
		<div { ...blockProps }>
			<div class="ipsltheme_component ipsltheme_multicolonnes2 noautop">
  
  				<h2 class="ipsltheme_component_h2 title">{ props.attributes.title }</h2>


 	 			<div class=" multicolonnes2 text-justify col1 ">{ props.attributes.col1 }</div>

			</div>
			
		</div>
	)
}


/*

  <div class="ipsltheme_component ipsltheme_multicolonnes2 noautop">
  
  	<h2 class="ipsltheme_component_h2">{ props.attributes.title }</h2>
  
  
  	<div class=" multicolonnes2 text-justify col1 ">{ props.attributes.col1 }</div>';
  
  </div>



*/