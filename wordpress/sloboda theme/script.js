/* Author: 

*/

/*google font loader*/
try {
      Typekit.load({
        active: function() {
          // As soon as the fonts are active, fade in the example
          // Don't fade in browsers that don't do proper opacity, like IE
          if (jQuery.support.opacity) {
            $('.js h1, .js input[type="submit"], .js #calendar .tec-button-off, .js #calendarList .tec-button-off, .js #newsletterBox h2, .js .button, .js #calendar .tec-button-on, .js #calendarList .tec-button-on, .js #blogContent .tag-title, .js #blogContent .archive-title, .js .blog #content hgroup h2').css('visibility', 'visible').hide().fadeIn();
          } else {
            $('.js h1, .js input[type="submit"], .js #calendar .tec-button-off, .js #calendarList .tec-button-off, .js #newsletterBox h2, .js .button, .js #calendar .tec-button-on, .js #calendarList .tec-button-on, .js #blogContent .tag-title, .js #blogContent .archive-title, .js .blog #content hgroup h2').css('visibility', 'visible');
          }
        },
        inactive: function() {
          // If the fonts are inactive, just show the example
          // You can apply fallback styles using the wf-inactive class in your CSS
          $('.js h1, .js input[type="submit"], .js #calendar .tec-button-off, .js #calendarList .tec-button-off, .js #newsletterBox h2, .js .button, .js #calendar .tec-button-on, .js #calendarList .tec-button-on, .js #blogContent .tag-title, .js #blogContent .archive-title, .js .blog #content hgroup h2').css('visibility', 'visible');
        }
      })
    } catch(e) {}


//content fade in loading

$(window).load(function(){
	$('.front-page2 #content').fadeTo(500,1);
	
	if ( $('#portfolioShow').length || $('#pressShow').length ) {
	
		if (window.location.hash != ''){
		
			var hashIndex = window.location.hash;
			var index = parseInt(hashIndex.replace('#',''));
			
			$('#portfolioShow section:eq('+(index-1)+')').find('img').imagesLoaded(function(){
				slideshowUpdate();
				$('#portfolioShow').fadeTo(500,1);
				//log('loaded show');
			});
			
			$('#pressShow section:eq('+(index-1)+')').find('img').imagesLoaded(function(){
				slideshowUpdate();
				$('#pressShow').fadeTo(500,1);
			});
		
		} else {
			
			$('#portfolioShow img, #pressShow img').first().imagesLoaded(function(){
				slideshowUpdate();
				$('#portfolioShow, #pressShow').fadeTo(500,1);
			});
			
		}
	}
})


$(document).ready(function() {	
	init();
});

function init(){
	menuCheck();
	pageCheck();
	homepageSetup();
	slideshowNew();
	newsletter();
	pressGridSetup();
}

function menuCheck() {
	
	//this creates more accurate menus (basically a hack around the Wordpress standard menus)

	$('#menu-item-90').find('a').attr('target', '_blank');

	if ( $('.category-press').length ){
		$('.current_page_parent').removeClass('current_page_parent');
		$('#menu-item-63').addClass('current-menu-parent').find('#menu-item-732').addClass('current-menu-item')
	}
	
	if ( $('.calendar').length || $('.calendar-single').length ){
		$('.current_page_parent').removeClass('current_page_parent');
		$('#menu-item-64').addClass('current-menu-parent').find('#menu-item-123').addClass('current-menu-item');
		
	}
	
	$('.archive-list:not(:first)').slideUp(1);
	
	$('.archive').find('li:not(.archive-list li)').click(function(){
		
		if($(this).next('.archive-list').is(':visible')) {
			$(this).next('.archive-list').slideUp(250);
		} else {
			$(this).next('.archive-list').slideDown(250);
		}
		
	});
	
	//adds decorational arrows to the press grid
	if( $('.press-grid').length ){
		if( $('.nav-previous').find('a').length < 1 ){
			$('.nav-previous').append('<a onclick="return false;" class="disabled" href="#">&lt;</a>');
		}
		if( $('.nav-next').find('a').length < 1 ){
			$('.nav-next').append('<a onclick="return false;" class="disabled" href="#">&gt;</a>');
		}
	}
}

function pageCheck(){
	//this wraps all of our single images pages in two columns so we don't have any ugly text wrapping issues
	
	if( $('.type-page').find('img.alignleft').length == 1){
		$('.type-page').find('.text').addClass('column2').before('<div class="column1 img group"></div>');
		$('img.alignleft').appendTo('.column1');
	}
}


function homepageSetup() {
	$('#special').wrap('<div id="specialOuter">');
	
	$(window).resize(function(){
		updateHomeWindow();
	})
}

function slideshowNew(){
	
		updateHomeWindow();
	
	if (window.location.hash != ''){
		var hashIndex = window.location.hash;
		var index = parseInt(hashIndex.replace('#',''));
		
		//console.log('index: '+(index-1));
		
		var current = $('#portfolioShow, #pressShow').find('section:eq('+(index-1)+')')
		
		if ( current.find('img:eq(0)').attr('src') == 'http://sarahsloboda.com/blank.gif' ) {
			current.find('img').each(function(){
				if( $(this).attr('src') != $(this).attr('alt') ){
					$(this).attr('src',$(this).attr('alt'));
					 
				}
			});
		}
		
		current.next('section').find('img').each(function(){
			if( $(this).attr('src') != $(this).attr('alt') ){
				$(this).attr('src',$(this).attr('alt'));
				
			}
		});
		
		current.prev('section').find('img').each(function(){
			if( $(this).attr('src') != $(this).attr('alt') ){
				$(this).attr('src',$(this).attr('alt'));
				
			}
		});
		
		current.next('section').next('section').find('img').each(function(){
			if( $(this).attr('src') != $(this).attr('alt') ){
				$(this).attr('src',$(this).attr('alt'));
				
			}
		});
		
		current.prev('section').prev('section').find('img').each(function(){
			if( $(this).attr('src') != $(this).attr('alt') ){
				$(this).attr('src',$(this).attr('alt'));
				
			}
		});
		
	} else {
		var index = 1;
	}
	
	
	
	var index0 = index-1;

	var totalSlides = $('#content').find('section').length;
	
if (totalSlides > 1){
	
	$('.press #content').find('section:eq('+index0+')').addClass('active');
	$('.press #content').find('section:not(.active)').fadeTo(0,0).hide();
	
	$('.portfolio #content').find('section:eq('+index0+')').addClass('active');
	$('.portfolio #content').find('section:not(.active)').fadeTo(0,0).hide();
	
	$('#gridLink').before('<nav><ul><li><a id="previousShow" href="" title="previous">&lt;</a></li><li><a id="nextShow" href="" title="next">&gt;</a></li></ul></nav><p class="count"><span id="currentCount">'+index+'</span>/'+totalSlides+'</p>');
	
	if (index == 1){
		$('#previousShow').addClass('disabled');
	} else if (index == totalSlides){
		$('#nextShow').addClass('disabled');
	}
	
}

slideshowUpdate();
	
	
	
	
	$('#previousShow').live('click', function(event){
		event.preventDefault();
		var previous = $('.active');
		if ( previous.prev('section').length > 0 ) {
			
			
			previous.toggleClass('active');
			
			previous.prev('section').prev('section').prev('section').find('img').each(function(){
				if( $(this).attr('src') != $(this).attr('alt') ){
					$(this).attr('src',$(this).attr('alt'));
					slideshowUpdate();
					 
				}
			});		
			
			previous.stop(true,true).fadeTo(250, 0);
			
			previous.prev('section').toggleClass('active').fadeTo(250, 1, function(){
				previous.hide();

				var count = $(this).prevAll('section').length +1;
				window.location.hash ="#"+count;
				//alert(count)
				
				$('#currentCount').text(count);
				
				if( totalSlides == 2 ){
					$('#previousShow,#nextShow').toggleClass('disabled');
				} else {
					
					if (count == 1){
						$('#previousShow').toggleClass('disabled');
					} else if ( count == (totalSlides-1) ) {
						$('#nextShow').toggleClass('disabled');
					}
					
				}
				
				
			});
			
		} 
		
		slideshowUpdate();
	});
	
	
	$('#nextShow').live('click', function(event){
		event.preventDefault();
		var previous = $('.active');
		if ( previous.next('section').length > 0 ) {
			
			previous.toggleClass('active');
			
			previous.next('section').next('section').next('section').find('img').each(function(){
				if( $(this).attr('src') != $(this).attr('alt') ){
					$(this).attr('src',$(this).attr('alt'));
					slideshowUpdate();
					 
				}
			});
		
			previous.fadeTo(250, 0);
			
			previous.next('section').toggleClass('active').fadeTo(250, 1, function(){
				previous.hide();
				
				var count = $(this).prevAll('section').length +1;
				window.location.hash ="#"+count;
				
				$('#currentCount').text(count);
				
				if( totalSlides == 2 ){
					$('#previousShow,#nextShow').toggleClass('disabled');
				} else {
				
					if (count == totalSlides){
						$('#nextShow').toggleClass('disabled');
					} else if ( count == 2 ) {
						$('#previousShow').toggleClass('disabled');
					}
				}
				
			});
			
		} 
		
		slideshowUpdate();
		
	});
	
	$(document).bind('keyup', 'right', function(event){
		event.preventDefault();
		$('#nextShow').click();
	});
	
	$(document).bind('keyup', 'left', function(event){
		event.preventDefault();
		//alert('pressed');
		$('#previousShow').click();
	});
	
	$(window).resize(function(){
		slideshowUpdate();
	});
	
} //end slideshowNew


function slideshowUpdate(){
	if($('#pressShow').length){
		var innerWindowHeight = $(window).height() -250;
		var innerWindowWidth = $('#content .inner').width();
		var windowProp = innerWindowHeight/innerWindowWidth;
		
		if (innerWindowHeight < 280) { innerWindowHeight = 280; }
		if (innerWindowHeight > 800) { innerWindowHeight = 800; }
		if (innerWindowWidth < 400) { innerWindowHeight = 400; }
		if (innerWindowWidth > 800) { innerWindowWidth = 800; }
		
		log('windowHeight: '+innerWindowHeight);
		log('windowWidth: '+(innerWindowWidth));
		
		log('windowP: '+innerWindowHeight/innerWindowWidth);
		
		$('#pressShow, .pressClip').height(innerWindowHeight+40).find('.img').height(innerWindowHeight);
		
		
		
		$('#pressShow section').each(function(){
			
		
			if( $(this).hasClass('double') ){
				
				var imageWidth = 40;
				$(this).find('img').each(function(){
					imageWidth += $(this).width();
					log( $(this).width() );
				})
				
				if (imageWidth > 800){
					$(this).addClass('fit-width');
					//imageWidth = 800;
				} else {
					$(this).removeClass('fit-width');
				}
				$(this).css('min-width', imageWidth+'px');
			
			} else {
				var imgWidth = $(this).find('img').width()
				var imgHeight = $(this).find('img').height()
				var imgProp = imgHeight/imgWidth;
				//log( 'image width: '+imgWidth);
				//log( 'image height: '+imgHeight );
				//log( 'imageP: ' +(imgHeight/imgWidth) );
				if(imgProp > windowProp){
				
					//double check to see if image is now too wide; if it is > 800px, set size to be 800px max
					var newWidth = (innerWindowHeight/imgHeight)*imgWidth;
					
					if (newWidth > 800){
						$(this).find('img').removeClass('fit-width').removeClass('fit-height').addClass('fit-width-800');
					} else {
						$(this).find('img').removeClass('fit-width').removeClass('fit-width-800').addClass('fit-height');
					}
					
				} else {
					$(this).find('img').removeClass('fit-height').removeClass('fit-width-800').addClass('fit-width');
				}
			}
	
		});
		
		
		
	} else if ($('#portfolioShow').length) {
		var innerWindowHeight = $(window).height() -250;
		
		if (innerWindowHeight < 320) {
			innerWindowHeight = 320;
		}
			
		$('#portfolioShow').height(innerWindowHeight);
		
		$('#portfolioShow section').each(function(){
			
				$(this).height(innerWindowHeight).find('.img').height(innerWindowHeight);
				$(this).find('img').height(innerWindowHeight).css('width', 'auto');
				
				var imageWidth = 50;
				$(this).find('img').each(function(){
					imageWidth += $(this).width();
				})
				$(this).css('min-width', imageWidth+'px');
		});
	}
}


function newsletter(){
	$('#newsletterBox').wrap('<div id="newsletterBoxOuter">').append('<a id="closeBox" href="#">close</a>');
	
	$('#newsletterSubmitOne').click(function(event){
		event.preventDefault();
		updateHomeWindow();
		var emailAdd = $('#emailOne').val();
		$('#emailTwo input').val(emailAdd);
		$('#newsletterBoxOuter').show();
	});
	
	$('#closeBox').live('click', function(event){
		event.preventDefault();
		//log('close');
		$('#newsletterBoxOuter').hide();
	});
	
}

function pressGridSetup(){
	
	if($('.pressblock').length > 1){
	
		var totalSlides = $('#pressList').find('.pressblock').length;
		
		$('#pressList').parent('article').append('<div id="articleNav"><nav><ul><li><a id="previousGrid" href="#" title="previous press article">&lt;</a></li><li><a id="nextGrid" href="#" title="next press article">&gt;</a></li></ul></nav><p class="count"><span id="currentCount">1</span>/'+totalSlides+'</p></div>');
	
	}
	
	$('#pressList').cycle({
			next: '#nextGrid',
			prev: '#previousGrid',
			speed:	250,
			fx: 'fade',
			timeout: 0,
			after: onAfter
		});
		
		function onAfter(curr, next, opts) {
	    var index = opts.currSlide;
	    $('#currentCount').text(index+1);
		}
	
}

function updateHomeWindow(){

	var windowWidth = $(window).width() -320;
	var windowHeight = $(window).height();
	
	if(windowHeight < 600){
		windowHeight = 600;
	}
	
	var windowProp = windowHeight/windowWidth;
	
		var slideWidth = $('#mainInner img').width();
		var slideHeight = $('#mainInner img').height();
		var slideProp = slideHeight/slideWidth;
		
		//log('proportion is: '+slideProp);
		
		var proportionW= slideWidth/windowWidth;
		var proportionH = slideHeight/windowHeight;
	
		var newHeight = slideHeight/proportionW;
		var newWidth = slideWidth/proportionH;
		
		if (newHeight > windowHeight){
			//log('height fix');
			$('#mainImages').height(windowHeight);
			$('#mainInner').css({'width': windowWidth+'px', 'height': newHeight+'px'});

			var diffHeight = (windowHeight - newHeight)/2;

			$('#mainInner').css({'top': diffHeight+'px'});
		} else {
			$('#mainImages').height(windowHeight);
			$('#mainInner').css({'width': newWidth, 'height': windowHeight});
			$('#mainInner').css({'top': '0px'});
		}
	
}






function updateSlideshow() {
	$('.pressClip').each( function(){
		if( $(this).is(':visible') ){
			var sectionWidth = $(this).width();
			var sectionHeight = $(this).height();
		}
		
		log('width: '+sectionWidth+', height: '+sectionHeight);
	})
	
	
	
}





	function slideIt(){
		var $active = $('#mainImages .active');
		
		$('#mainImages li:not(.active)').fadeTo(0,0);
		
		var $next = $active.next('li').length ? $active.next() : $('#mainImages li:eq(0)');
		
		$active.fadeTo(250,0);
		$next.fadeTo(250,1, function(){
			$active.toggleClass('active');
			$(this).addClass('active');
		});
		
	}












