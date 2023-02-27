<?php
/**
 * Plugin Name:       CB Block Library
 * Description:       Lots of blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Chris Barnett
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       cb-blocklibrary
 *
 * @package           cb
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cb_cb_blocklibrary_block_init() {
	register_block_type( __DIR__ . '/build/blocks/dynoblock' );
	register_block_type( __DIR__ . '/build/blocks/testimonial' );
	register_block_type( __DIR__ . '/build/filters/border-control' );


}
add_action( 'init', 'cb_cb_blocklibrary_block_init' );
