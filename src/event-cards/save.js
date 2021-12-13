import { useBlockProps, InnerBlocks } from '@wordpress/block-editor'

export default function save() {
	const blockProps = useBlockProps.save()

	return (
		<div { ...blockProps }>
			<div  class="ipsltheme_component ipsltheme_card_event noautop row justify-content-center">
				
					<InnerBlocks.Content />
				
			</div>
		</div>
	)
}
