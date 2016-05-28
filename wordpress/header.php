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
			<h2>Receive our Fresh and&nbsp;Tasteful Newsletter</h2>

			<div class="e2ma_signup_form" id="e2ma_signup_form">

		<div class="e2ma_signup_message" id="e2ma_signup_message">    
        <div>Download Sarah Sloboda's What to Wear guide to make sure you dress your best for your family's photo shoot. Get her monthly newsletter with inspiration for capturing gorgeous photos throughout the year.</div>
    </div>
    
  <div class="e2ma_signup_form_container" id="e2ma_signup_form_container">

    <form target="_blank" method="post" id="e2ma_signup" name="signup" action="https://app.e2ma.net/app/view:Join/signupId:76470/acctId:26470">

		<input type="hidden" name="member_id" value="">
    <input type="hidden" name="prev_member_email" value="">
    <input type="hidden" name="signup_name" value="none">
 
    <div class="e2ma_signup_form_row">
      <div class="e2ma_signup_form_label">
        
        first name
      </div>
      <div class="e2ma_signup_form_element"><input name="emma_member_name_first" type="text"></div>
    </div>

    <div class="e2ma_signup_form_row">
      <div class="e2ma_signup_form_label">last name
      </div>
      <div class="e2ma_signup_form_element"><input name="emma_member_name_last" type="text"></div>
    </div>

    <div class="e2ma_signup_form_row">
      <div class="e2ma_signup_form_label">
        
        <span class="e2ma_signup_form_required_asterix">*</span>
        
        email
      </div>

      <div id="emailTwo" class="e2ma_signup_form_element"><input name="emma_member_email" type="text"></div>
    </div>

    <div class="e2ma_signup_form_row">
      <div class="e2ma_signup_form_label">
        
        How did you hear about us?
      </div>
      <div class="e2ma_signup_form_element"><select name="emma_member_wildcard_29824">
	<option value="friend">friend</option>
	<option value="magazine">magazine</option>

	<option value="parenting blog">parenting blog</option>
	<option value="moms' group">moms' group</option>
	<option value="fundraiser">fundraiser</option>
	<option value="other event">other event</option>
	<option value="google search">google search</option>
	<option value="website referral">website referral</option>

	<option value="A Child Grows in Brooklyn">A Child Grows in Brooklyn</option>
	<option value="Citibabes">Citibabes</option>
	<option value="SoHo House">SoHo House</option>
	<option value="Urban Baby">Urban Baby</option>
</select></div>
    </div>
    
    <div class="e2ma_signup_form_required_footnote"><span class="e2ma_signup_form_required_asterix">*</span> required</div>

    <div class="e2ma_signup_form_button_row" id="e2ma_signup_form_button_row">
      <input id="e2ma_signup_submit_button" class="e2ma_signup_form_button" name="Submit" value="Submit" type="submit">
    </div>
    
  </form>
  
  </div><!-- end form container -->
</div><!-- end form -->
			
		</section>
		
	</div><!-- End Header -->