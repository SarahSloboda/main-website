<!doctype html>  

<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">

  <title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );

	?></title>

  <meta name="viewport" content="width=device-width, maximum-scale: 1.5">
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>"/>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	
	<script src="<?php wp_js('/js/libs/modernizr-1.6.min.js'); ?>"></script>
  <script type="text/javascript" src="http://use.typekit.com/fbi7mxo.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<?php
	/* We add some JavaScript to pages with the comment form
	 * to support sites with threaded comments (when in use).
	 */
	if ( is_singular() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );

	/* Always have wp_head() just before the closing </head>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to <head> such
	 * as styles, scripts, and meta tags.
	 */
	wp_head();?>
</head>

<body class="group<?php echo ' '.$template;?>">
	
	<div id="header">
		<div id="logo">
			<a href="<?php bloginfo('url'); ?>">Sarah Sloboda Photography</a>
		</div><!-- end Logo -->
		
		<nav id="mnav">
			<?php wp_nav_menu( array('menu' => 'Main Menu', 'link_before'=>'<span>', 'link_after'=>'</span>' )); ?>		
		</nav><!-- End Main Nav -->
		
		<div id="fnav" class="group">
			<ul>
				<li class="facebook"><a href="https://www.facebook.com/sarahslobodaphotography" target="_blank">Twitter</a></li>
				<li class="twitter"><a href="https://twitter.com/SarahSloboda" target="_blank">Twitter</a></li>
				<li class="pinterest"><a href="http://instagram.com/sarahsloboda" target="_blank">Instagram</a></li>
						
			</ul>
		</div><!-- End Footer Nav -->
		
		<div id="newsletter">
			<p>Wondering what to wear? Get the guide to dressing your family for a photo shoot:</p>
			<form action="#">
				<input name="emailOne" id="emailOne" type="text" placeholder="Email Address"/>
				<input id="newsletterSubmitOne" type="submit" value="Submit" />
			</form>
		</div><!-- End Newsletter -->
		
		<section id="newsletterBox">
			<link href="https://app.e2ma.net/css/signup-refresh.med.css" rel="stylesheet" type="text/css"><script type="text/javascript" src="https://app.e2ma.net/app2/audience/tts_signup_refresh/56284/66030ae89f1bcffb8a4070b4a03e430f/26470/"></script><div id="load_check" class="signup_form_message" >This form needs Javascript to display, which your browser doesn't support. <a href="https://app.e2ma.net/app2/audience/signup/56284/26470/"> Sign up here</a> instead </div><script type="text/javascript">signupFormObj.drawForm();</script>
		</section>
		
	</div><!-- End Header -->