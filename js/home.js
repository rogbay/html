$(document).ready(function() {
	// js for featured
	$('#featured_show').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  // autoplay: true,
  	  autoplaySpeed: 3000,
  	  variableWidth: false,
  	  adaptiveHeight: true,
  	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        variableWidth: true,
	        centerMode: false,
	      }
	    }
	  ]
	});
	// js for popular categories
	$('#popular_showcat').slick({
	  infinite: true,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  dots: false,
	  // autoplay: true,
  	  autoplaySpeed: 3000,
  	  variableWidth: false,
  	  adaptiveHeight: false,
  	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        variableWidth: true,
	      }
	    }
	  ]
	});
	//js slider for team
	$('.js_team').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  autoplay: true,
  	  autoplaySpeed: 3000,
  	  variableWidth: false,
  	  adaptiveHeight: false,
  	  centerMode: true,
  	  responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        variableWidth: true,
	        autoplay: true
	      }
	    }
	  ]
	});
	//js slider customer
	$('.js_customer').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: false,
	  autoplay: false,
  	  autoplaySpeed: 3000,
  	  variableWidth: false,
  	  adaptiveHeight: false,
  	  centerMode: true,
  	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        variableWidth: true,
	        centerMode: true,
	        autoplay: true,
	      }
	    }
	  ]
	});
});