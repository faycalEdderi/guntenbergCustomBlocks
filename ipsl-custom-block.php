<?php
/**
 * Plugin Name:       Ipsl-component
 * Description:       Custom guntenberg block for ipsl
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Edderi Fayçal for IPSL
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ipsl-custom-block
 *
 * @package           ipsl-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function ipsl_block_ipsl_custom_block_block_init() {
	//error_log(var_export(plugin_dir_url(__FILE__), true));
	register_block_type( __DIR__ );
}
add_action( 'init', 'ipsl_block_ipsl_custom_block_block_init' );
