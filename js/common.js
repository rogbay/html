$(function() {
	$('.boxlink').click(function() {
		window.location = $(this).find('a').attr('href');
		return false;
	});

	/* scrool to Top */
	$('.scrollup').click(function() {
		$("html, body").animate({
			scrollTop: 10
		}, 500);
		return false;
	});
	/* scrool to id */
	$('.scrollto').click(function() {
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped, 100);
		return false;
	});

	$('.js_backtotop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

	function scrollToDiv(element) {
		var offset = element.offset().top;
		$('body,html').animate({
			scrollTop: offset
		}, 500);
	}

	$(document).ready(function() {
		$('.js_navshow').click(function() {
			$('nav').slideToggle(400);
		});
		$('.js_searchshow').click(function() {
			$('.js_searchbox').slideToggle(400);
			$('.js_closesearch .fas').click(function() {
				$('.js_searchbox').slideUp();
			});
		});
		$('.js_nav>li').each(function() {
			if ($(this).children().hasClass('js_submenu') == true) {
				$(this).find('a').first().removeAttr('href');
			}
		});
		$('.js_backnav').click(function() {
			$('.js_submenu').removeClass('showmenu');
		});
		$('.js_closenav').click(function() {
			$('nav').slideUp(400);
		});
		var isCollapseOpenedMenu = true;
		if (isCollapseOpenedMenu == false) {
			$('.js_nav>li>a').click(function() {
				if ($(this).parent().children().hasClass('js_submenu') == true) {
					$(this).parent().find('.js_submenu').toggleClass('showmenu');
					$(this).toggleClass('style_iconav');
				}
			});
		} else {
			$('.js_nav>li>a').click(function() {
				if ($(this).parent().children().hasClass('js_submenu') == true) {
					if ($(this).parent().find('.js_submenu').hasClass('showmenu') == false) {
						$('.js_submenu').removeClass('showmenu');
						$('.js_nav>li>a').removeClass('style_iconav');
						$(this).parent().find('.js_submenu').addClass('showmenu');
						$(this).addClass('style_iconav');
					} else {
						
						$(this).parent().find('.js_submenu').removeClass('showmenu');
						$(this).removeClass('style_iconav');
					}
					
				}
			});
		}
		$('.js_hdmyacount').click(function() {
			$('.js_accountnav').slideToggle();
		});
		
	});

});
