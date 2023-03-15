---
# SEO
title: Example product B
description: write_a_description_around_160_characters_long_about_this_PRODUCT_POST
image: /assets/images/seo/banner.png

# PAGE
date: 2023-01-01T10:00:00+10:00
name: Example product B
post_title: Example product B
thumbnail: assets/images/products/product-b/thumbnail.jpg
featured_image: assets/images/products/product-b/city-b.jpg
permalink: "/products/product-b/"
# link: https://example.com/
weight: 20
---

Watch the Live Talk from WordCamp Asia 2023
-------------------------------------------

WordPress development used to be mostly about writing PHP and sometimes adding in sprinkles of JavaScript. But since 5.0, you can now rarely talk about WordPress development _without_ mentioning JavaScript or more specifically **React**, the JavaScript library which the Block Editor is written in. So is learning React necessary for Block development?

And the answer is… It depends.

There are two approaches to Block development:

Gutenberg Block Development Using PHP
-------------------------------------

![](https://xwp.co/wp-content/uploads/2023/02/PHP.png)

The first is lean towards PHP. This usually involves using third party solutions like [Advanced Custom Fields](https://www.advancedcustomfields.com/) or [Meta Box Blocks](https://metabox.io/plugins/mb-blocks/) that serve as a framework for you to create custom blocks in a way which you’re already comfortable with. Despite having their own system, there are still some similarities to how native WordPress handles things like block registration. For example, Advanced Custom Fields recommends and supports the use of `block.json` for configuring your block.

Here’s a simplified example of creating a testimonial block using the ACF framework (code taken and simplified from [](https://www.advancedcustomfields.com/resources/blocks/)[https://www.advancedcustomfields.com/resources/blocks/](https://www.advancedcustomfields.com/resources/blocks/))

.wp-block-code {
	border: 0;
	padding: 0;
}

.wp-block-code > div {
	overflow: auto;
}

.shcb-language {
	border: 0;
	clip: rect(1px, 1px, 1px, 1px);
	-webkit-clip-path: inset(50%);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	word-wrap: normal;
	word-break: normal;
}

.hljs {
	box-sizing: border-box;
}

.hljs.shcb-code-table {
	display: table;
	width: 100%;
}

.hljs.shcb-code-table > .shcb-loc {
	color: inherit;
	display: table-row;
	width: 100%;
}

.hljs.shcb-code-table .shcb-loc > span {
	display: table-cell;
}

.wp-block-code code.hljs:not(.shcb-wrap-lines) {
	white-space: pre;
}

.wp-block-code code.hljs.shcb-wrap-lines {
	white-space: pre-wrap;
}

.hljs.shcb-line-numbers {
	border-spacing: 0;
	counter-reset: line;
}

.hljs.shcb-line-numbers > .shcb-loc {
	counter-increment: line;
}

.hljs.shcb-line-numbers .shcb-loc > span {
	padding-left: 0.75em;
}

.hljs.shcb-line-numbers .shcb-loc::before {
	border-right: 1px solid #ddd;
	content: counter(line);
	display: table-cell;
	padding: 0 0.75em;
	text-align: right;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	white-space: nowrap;
	width: 1%;
}

`{     "name": "acf/testimonial",     "title": "Testimonial",     "description": "A custom testimonial block.",     "style": [ "file:./testimonial.css" ],     "category": "formatting",     "icon": "admin-comments",     "keywords": ["testimonial", "quote"],     "acf": {         "mode": "preview",         "renderTemplate": "testimonial.php"     },     "align": "full" }`

Code language: JSON / JSON with Comments (json)

**/blocks/testimonials/block.json**

`<?php   /**  * Registering your block using the native register_block_type function.  */ add_action( 'init', 'register_acf_blocks' ); function register_acf_blocks() {     register_block_type( __DIR__ . '/blocks/testimonial' ); }`

Code language: HTML, XML (xml)

`<?php /**  * testimonial.php - block template  */  // Load values and assign defaults. $text   = get_field( 'testimonial' ) ?: 'Your testimonial here...'; $author = get_field( 'author' ) ?: 'Author name';  ?>  <div> 	<blockquote class="testimonial-blockquote"> 		<span class="testimonial-text"><?php echo esc_html( $text );?></span> 		<span class="testimonial-author"><?php echo esc_html( $author );?></span> 	</blockquote> </div>`

Code language: HTML, XML (xml)

The most obvious benefit with this approach is how quick and easy it is to get up and running; you don’t have to worry about things like tooling or package management in order to start creating custom blocks.

It’s also worth mentioning that plugins like Advanced Custom Fields are very popular in the WordPress ecosystem. For some, those plugins are part of their ‘tech stack’ when building WordPress sites. Hence this “low barrier to entry” solution is especially popular among seasoned WordPress and PHP developers because you’re leveraging an already familiar API to do something new.

With this approach, you’ll be predominantly working with PHP; there’s very little need, if any at all, for JavaScript, let alone React.

So if you choose this route then no, it’s not necessary to learn React for Block development.

But the idea of adding another third party dependency or framework, especially for doing something that is fundamental to WordPress is a deal-breaker for many. Lack of future-proofing and incompatibilities are some valid reasons to stay away from them and stick closely to doing things the “WordPress Way”.

This brings us to the second approach.

Gutenberg Block Development Using JavaScript
--------------------------------------------

![](https://xwp.co/wp-content/uploads/2023/02/JavaScript.png)

Or rather mostly JavaScript. Like many other things in WordPress you can’t avoid writing PHP. In most cases though, we’re talking about minimal involvement i.e., for enqueuing scripts or registering blocks on the server-side. Apart from that, it’s JavaScript all the way down.

> It’s worth mentioning for dynamic blocks, depending on its complexity there could be quite a bit of PHP required.

But because it’s JavaScript and React, two terms that aren’t synonymous with WordPress development until a few years ago, the barrier to entry is high; getting your local environment setup can sometimes be a mini-project by itself; tooling and configurations can be very daunting and it’s possible to spend hours on them before you get to write the first line of code for your block. Also, not everyone has the luxury of time to get up to speed with React and its ecosystem.

So why is this still a viable and, in most cases, the recommended approach?

Security, performance and future-proofing, just to name a few.

Since we are using the API provided by WordPress Core, we can be sure that they are widely tested and optimized for a more superior editing experience. Having one less third-party solution also means you’re less likely to encounter compatibility issues; the “WordPress Way” is also continually evolving and improving so sticking to it helps ensure your codebase remains up-to-date.

So does this mean it’s necessary to learn React for this approach? Again, it depends.

If you’re looking to create basic blocks with minimal settings then you **don’t need to learn React**. But having a **cursory understanding** of concepts like state, components and the JSX syntax does is very useful. And the [Block Editor handbook](https://developer.wordpress.org/block-editor/getting-started/create-block/) is a good resource to help with that.

(simplified code taken from [Create a Block Tutorial](https://developer.wordpress.org/block-editor/getting-started/create-block/))

`{     "$schema": "https://schemas.wp.org/trunk/block.json",     "apiVersion": 2,     "name": "create-block/gutenpride",     "version": "0.1.0",     "title": "Gutenpride",     "category": "widgets",     "icon": "smiley",     "description": "Example static block scaffolded with Create Block tool.",     "attributes": {         "message": {             "type": "string",             "source": "text",             "selector": "div",             "default": ""         }     },     "textdomain": "gutenpride" }`

Code language: JSON / JSON with Comments (json)

**block.json**

`/**  * Edit.js  */  import { TextControl } from '@wordpress/components'; import { useBlockProps } from '@wordpress/block-editor';  export default function Edit( { attributes, setAttributes } ) {     const blockProps = useBlockProps();     return (         <TextControl             { ...blockProps }             value={ attributes.message }             onChange={ ( val ) => setAttributes( { message: val } ) }         />     ); }`

Code language: JavaScript (javascript)

`/**  * Save.js  */  import { useBlockProps } from '@wordpress/block-editor';  export default function save( { attributes } ) {     const blockProps = useBlockProps.save();     return <div { ...blockProps }>{ attributes.message }</div>; }`

Code language: JavaScript (javascript)

![Inserting our “Simple Block” into the editor](https://xwp.co/wp-content/uploads/2023/02/Untitled.gif)

Inserting our “Simple Block” into the editor

For more advanced blocks that involve the [WordPress’ data module](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/) or working with external data sources then yes, you **should learn React.** As the complexity of your block increases, chances are you will have to dig deeper into concepts like state management, lifecycle and hooks to help with debugging, avoiding common pitfalls (like the [infinite loop in useEffect](https://blog.logrocket.com/solve-react-useeffect-hook-infinite-loop-patterns/)) and ensuring the end product works as intended.

On top of that, getting familiar with [Redux](https://redux.js.org/), the state management library which the WordPress’ data module is inspired by, is also beneficial and important. And that because you’ll likely find yourself reaching out to the WordPress data store for things like getting the parent’s block client ID or all nested blocks inside a parent block.

`/**  * Using the WordPress data module to retrieve information of parent and nested blocks  */  export default function Edit( props ) { 	// code removed for brevity  	// Selects nested Accordion-item blocks and index of each Accordion-item block. 	const { blockIDs, itemIndex } = useSelect( ( select ) => { 		// Gets ID of Accordion Parent block 		const parentOfSelectedBlock = select( 			'core/block-editor' 		).getBlockRootClientId( clientId );  		// Gets all nested Accordion item blocks. 		const blocksList = select( 'core/block-editor' ).getBlocks( 			parentOfSelectedBlock 		);  		return { 			blockIDs: blocksList.map( ( b ) => b.clientId ), 			itemIndex: select( 'core/block-editor' ).getBlockIndex( 				clientId, 				parentOfSelectedBlock 			), 		}; 	} );  	// code removed for brevity }`

Code language: JavaScript (javascript)

Knowing React is also incredibly helpful in understanding the Gutenberg source code to see how things are being done the “WordPress Way”. For instance, the core Button block has a nice little feature for improving accessibility. When you click on the “Link” block control, a popover appears and the focus automatically shifts to the input field.

![](https://xwp.co/wp-content/uploads/2023/02/Untitled-2.gif)

Clicking on the same control again will cause the Button to be unlinked. At the same time, the focus automatically shifts back to the Button input. This nicety is achieved using refs in React.

![](https://xwp.co/wp-content/uploads/2023/02/Untitled-4.gif)

Improving accessibility by auto enabling focus on the button after the popover closes.

`/**  * Simplified RichText Component using the forwardRef React API to receive the ref from its parent and forward it to a child component (<TagName />)  */   function RichTextWrapper(props, forwardedRef) {     return (         <TagName              ref={ useMergeRefs( [                 forwardedRef,                 ...otherRefs,             ] ) } // is this the correct syntax for spreading in array?             {...otherProps}         />     ) } const ForwardedRichTextContainer = forwardRef( RichTextWrapper );  export default ForwardedRichTextContainer;`

Code language: JavaScript (javascript)

The above is just one of the many examples of how knowing React allows you to not only handle complex blocks but also provide a better editing experience when users use your block.

![](https://xwp.co/wp-content/uploads/2023/02/5.png)

The Two Approaches to Block Development

Next steps
----------

So you have chosen your approach. What’s next? Here are some resources for both approaches to help you start writing your first block:

*   [Guide on Advanced Custom fields Blocks](https://www.advancedcustomfields.com/resources/blocks/)
*   [A guide to Custom Fields and ACF blocks](https://deliciousbrains.com/advanced-custom-fields-wordpress/)
*   [The Block Editor handbook](https://developer.wordpress.org/block-editor/)
*   [React Docs (Beta)](https://beta.reactjs.org/)

The Block Editor has been in development for about 5 years now and is not going to go away. So let’s help each other embrace this paradigm of working and developing with WordPress by teaching and sharing.