import { __ } from '@wordpress/i18n'
import { useBlockProps } from '@wordpress/block-editor'

export default function save( props ) {
	const blockProps = useBlockProps.save()

		
	return (
		props.attributes.pictureID && (
			<div { ...blockProps }>
				<div class="card" > 
					<a class="link" href={props.attributes.link} >
						<div class="vignette card_vignette">
							<img src={ props.attributes.pictureURL } alt={ props.attributes.pictureAlt } />
						</div>
						<div class="card-body">
							<h3 class="noioc">
							<span class="card-day day">{ props.attributes.day }</span>
							<span class="card-month month ">{ props.attributes.month }</span>
								<span class="card-event-type title">{props.attributes.title}</span>
							</h3>
							<p hidden class="date">{props.attributes.date}</p>
							<p class="card-text  description">{props.attributes.description}</p>

						</div>
					</a>
				</div>
				
			</div>
		)
	)
}

/**
<div id="'.$card_eventID.'" class="ipsltheme_component ipsltheme_card_event noautop row justify-content-center">
 	<h2 class="ipsltheme_component_h2">'.$u_titre.'</h2>
  

	<div class="card" > 
		<a href="'.$href.'" target="_'.$target.'">
		<div class="vignette card_vignette">
		<img src="'.$vignette.'" alt="card_event_image">
		</div>
		<div class="card-body">
			<h2 class="noioc">
			<span class="card-day">'.$jour.'</span>
			<span class="card-month">'.$mois.'</span>
			</h2>
			<h3 class="noioc">
			<span class="card-event-type">'.$titre.'</span>
			</h3>
			<p class="card-text">'.$texte.'</p>
		</div>
		</a>
	</div>
  
</div>
  
 */
