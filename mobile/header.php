<!doctype html>
<html>
<head>
	<meta charset="utf-8">

	<title><?php wp_title( '|', true, 'right' );
	bloginfo( 'name' );
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description"; ?></title>

	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320"/>
	
	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />

	<meta http-equiv="cleartype" content="on">
<!-- visible -->
	<link rel="stylesheet" href="http://www.sarahsloboda.com/wp-content/plugins/sloboda-handheld/main_themes/HandHeld/style.css" type="text/css" media="screen" />
	
	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
	<?php wp_head(); ?>
  <script type="text/javascript" src="http://use.typekit.com/fbi7mxo.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	
</head>
<body <?php body_class(); ?>>
	<?php
		global $et_mobile;
	?>
	<div id="container" class="interior">
		<header id="main_header" role="banner">
			<div id="nav_bar">
				<div id="nav_bottom_shadow">
					<div id="nav_bar_top_bg">
						<a id="main_menu_link" href="#"><?php esc_html_e('Menu','HandHeld'); ?><span></span></a>
						<a id="home_link" href="<?php echo home_url(); ?>">Back to Home</a>
						<div class="main_nav">
							<?php wp_nav_menu( array('menu' => 'handheld-menu' )); ?>
						</div><!-- .main_nav -->
						<div class="clear"></div>
					</div> <!-- end #nav_bar_top_bg -->
				</div> <!-- end #nav_bottom_shadow -->
				
			</div> <!-- end #nav_bar -->
			
			<?php do_action( 'handheld_header' ); ?>
			<div id="logo-area">
				<a href="<?php echo home_url(); ?>">
					<img src="<?php bloginfo('template_url'); ?>/images/ss-bug.png" class="bug" alt="">					
				</a>
				<h3>
						<?php if( is_tag() ) { ?>
						<?php esc_html_e('Posts Tagged ','HandHeld') ?><span class="raquo">&quot;</span><?php single_tag_title(); echo('&quot;'); ?>
					<?php } elseif (is_day()) { ?>
						<?php esc_html_e('Posts made in','HandHeld') ?> <?php the_time('F jS, Y'); ?>
					<?php } elseif (is_month()) { ?>
						<?php esc_html_e('Posts made in','HandHeld') ?> <?php the_time('F, Y'); ?>
					<?php } elseif (is_year()) { ?>
						<?php esc_html_e('Posts made in','HandHeld') ?> <?php the_time('Y'); ?>
					<?php } elseif (is_search()) { ?>
						<?php esc_html_e('Search results for','HandHeld') ?> <?php the_search_query() ?>
					<?php } elseif (is_single()) { ?>
						<?php $category = get_the_category();
							  if ( $category ) { 
								$catlink = get_category_link( $category[0]->cat_ID );
								echo (esc_html($category[0]->cat_name));
							  } ?>
					<?php } elseif (is_category()) { ?>
						<?php single_cat_title(); ?>
					<?php } elseif (is_author()) { ?>
						<?php 
							global $wp_query;
							$curauth = $wp_query->get_queried_object();
						?>
						<?php esc_html_e('Posts by ','HandHeld'); echo ' ',$curauth->nickname; ?>
					<?php } elseif (is_page()) { ?>
						<?php wp_title(''); ?>
						<?php } else  { ?>
							Blog
					<?php }; ?>
		</h3>
		<div class="clear"></div>
			</div> <!-- end #logo-area -->
			
		</header> <!-- end #main-header -->
		<div id="main" role="main">
			<div id="main-top-shadow">
			<?php do_action( 'handheld_main_area' ); ?>