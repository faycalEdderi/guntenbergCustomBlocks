import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

	return (
// { ...blockProps } 
		
		<div { ...blockProps }>
			<div className="ipsltheme_component ipsltheme_multicol3bs noautop">
				<h2 class="ipsltheme_component_h2 title" id="ioc_0" style="cursor: pointer;">{ props.attributes.title }</h2>
				<div className="noautop multicol3bs row justify-content-center">
					<div className="col1 text-justify col col-lg-4 col-md-4 col-sm-12 col-xs-12" >
						{ props.attributes.col1 }
					</div>
					<div className="col2 text-justify col col-lg-4 col-md-4 col-sm-12 col-xs-12" >
						{ props.attributes.col2 }
					</div>
					<div className="col3 text-justify col col-lg-4 col-md-4 col-sm-12 col-xs-12" >
						{ props.attributes.col3 }
					</div>
				</div>
			

			</div>
			
				{/* <p className="col1">{ props.attributes.col1 }</p>
				<p className="col2">{ props.attributes.col2 }</p>
				<p className="col3">{ props.attributes.col3 }</p> */}
			
		</div>
	)
}


/*

  <div class="ipsltheme_component ipsltheme_multicol3bs noautop">
  
  	<h2 class="ipsltheme_component_h2">'.$titre.'</h2>
  
  	<div class="noautop multicol3bs row justify-content-center">
		<div class="col col-lg-4 col-md-4 col-sm-12 col-xs-12" >
			trim($texte1,$a)
		</div>
		<div class="col col-lg-4 col-md-4 col-sm-12 col-xs-12" >
			trim($texte2,$a)
		</div>
		<div class="col col-lg-4 col-md-4 col-sm-12 col-xs-12" >
			trim($texte3,$a)
		</div>
	</div>
	<style>.multicol3bs .col{text-align:justify;}</style>';

  </div>



*/