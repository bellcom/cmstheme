jQuery(document).ready(function () {
	var slideNavItems = jQuery('.custom-slideshow .item-bg');
	slideNavItems.each(function(k,v) {
		jQuery(v).parent().parent().parent().css('background-image','url('+jQuery(v).attr("title")+')');
	});

	jQuery('.custom-slideshow').mouseover(function() {
	  jQuery(this).addClass('hovering');
	}).mouseout(function() {
	  jQuery(this).removeClass('hovering');
	});

	jQuery('.pane-newslist ul li').not(':last-child').each(function(k,v) {
		jQuery(v).find('.news-list-next').html(jQuery(v).next().find('.news-list-right').html());
	});
	
	if(jQuery('#region-sidebar-first .active').children('.menu').length > 0) {
	  jQuery('#region-sidebar-first .active').children('.menu').addClass('menuActive');
	} else {
      jQuery('#region-sidebar-first .active').parent().addClass('menuActive');
	}

      jQuery('.vis-andre-sites a, .skjul-andre-sites a').click(function(event) {
	event.preventDefault();
	jQuery('#'+jQuery(this).data('target')).toggle();
	jQuery('.vis-andre-sites a').toggle();
      });

});

