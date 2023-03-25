// const $status = $('.slider-paging-number');
// const $slickElement = $('.b-front-page-banner-slider');
// console.log($('.slider-paging-number'));

// $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//   if(!slick.$dots){
//   	return;
//   }

//   let i = (currentSlide ? currentSlide : 0) + 1;
// 	$('.slider-paging-number')[0].innerHTML = `<span class="count">${i}</span>/${slick.$dots[0].children.length}`;
// });

// $slickElement.slick({
// 	arrows: true,
// 	infinite: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	centerPadding: '0px',
// 	cssEase: 'linear',
// 	autoplay: false,
// 	dots: true,
// 	rows: 1,
// 	nextArrow: $('.b-front-page-banner .slider-arrows .slider-next'),
// 	prevArrow: $('.b-front-page-banner .slider-arrows .slider-prev'),
// });

$('.slider-catalog-category').slick({
	arrows: true,
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 1,
	centerMode: false,
	centerPadding: '0px',
	cssEase: 'linear',
	autoplay: false,
	dots: false,
	rows: 1,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true
			}
		},
	],
});

$('.product-collection-slider').slick({
	arrows: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: false,
	centerPadding: '0px',
	cssEase: 'linear',
	autoplay: false,
	dots: true,
	rows: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				dots: false,
				adaptiveHeight: true
			}
		},
	],
});

$('.product-info-big-slider').slick({
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: false,
	centerPadding: '0px',
	cssEase: 'linear',
	autoplay: false,
	dots: false,
	rows: 1,
	asNavFor: ".product-info-small-slider",
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				arrows: true,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: true,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				arrows: true,
				adaptiveHeight: true
			}
		},
	],
});
$('.product-info-small-slider').slick({
	arrows: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: false,
	centerPadding: '0px',
	cssEase: 'linear',
	autoplay: false,
	dots: true,
	rows: 1,
	vertical: true,
	asNavFor: ".product-info-big-slider",
	swipe: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				dots: false,
			}
		},
	],
});

$('.will-need-slider').slick({
	arrows: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: false,
	centerPadding: '0px',
	cssEase: 'linear',
	autoplay: false,
	dots: true,
	rows: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true
			}
		},
	],
});

// $('.slider-news').slick({
// 	arrows: true,
// 	infinite: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	centerPadding: '0px',
// 	cssEase: 'linear',
// 	autoplay: false,
// 	dots: false,
// 	rows: 1,
// 	variableWidth: true,
// 	responsive: [
// 		{
// 			breakpoint: 991,
// 			settings: {
// 				slidesToShow: 2,
// 				adaptiveHeight: true
// 			}
// 		},
// 		{
// 			breakpoint: 767,
// 			settings: {
// 				slidesToShow: 1,
// 				adaptiveHeight: true
// 			}
// 		},
// 		{
// 			breakpoint: 576,
// 			settings: "unslick"
// 		},
// 	],
// });

// $('.slider-cases').slick({
// 	arrows: false,
// 	infinite: false,
// 	slidesToShow: 2,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	centerPadding: '0px',
// 	cssEase: 'linear',
// 	autoplay: false,
// 	dots: false,
// 	rows: 1,
// 	responsive: [
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 2,
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 1,
// 			}
// 		},
// 		{
// 			breakpoint: 576,
// 			settings: "unslick"
// 		},
// 	],
// });

// $('.slider-reviews').slick({
// 	arrows: true,
// 	infinite: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	centerPadding: '0px',
// 	cssEase: 'linear',
// 	autoplay: false,
// 	dots: false,
// 	rows: 1,
// 	responsive: [
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesToShow: 2,
// 			}
// 		},
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 2,
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 1,
// 			}
// 		},
// 		{
// 			breakpoint: 576,
// 			settings: {
// 				slidesToShow: 1,
// 			}
// 		},
// 	],
// });

// $('.b-single-cases-reviews .slider-review').slick({
// 	arrows: true,
// 	infinite: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	centerPadding: '0px',
// 	cssEase: 'linear',
// 	autoplay: false,
// 	dots: false,
// 	rows: 1,
// 	// responsive: [
// 	// 	{
// 	// 		breakpoint: 1200,
// 	// 		settings: {
// 	// 			slidesToShow: 2,
// 	// 		}
// 	// 	},
// 	// 	{
// 	// 		breakpoint: 992,
// 	// 		settings: {
// 	// 			slidesToShow: 2,
// 	// 		}
// 	// 	},
// 	// 	{
// 	// 		breakpoint: 768,
// 	// 		settings: {
// 	// 			slidesToShow: 1,
// 	// 		}
// 	// 	},
// 	// 	{
// 	// 		breakpoint: 576,
// 	// 		settings: {
// 	// 			slidesToShow: 1,
// 	// 		}
// 	// 	},
// 	// ],
// });

// $('.slider-news').slick({
// 	arrows: false,
// 	infinite: false,
// 	slidesToShow: 2,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	centerPadding: '0px',
// 	cssEase: 'linear',
// 	autoplay: false,
// 	dots: false,
// 	rows: 1,
// 	responsive: [
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 1,
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 1,
// 			}
// 		},
// 		{
// 			breakpoint: 576,
// 			settings: "unslick"
// 		},
// 	],
// });

// $('.b-page-about-team .slider-team').slick({
// 	arrows: false,
// 	infinite: false,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	centerPadding: '0px',
// 	cssEase: 'linear',
// 	autoplay: false,
// 	dots: false,
// 	rows: 1,
// 	responsive: [
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesToShow: 2,
// 			}
// 		},
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 2,
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 2,
// 			}
// 		},
// 		{
// 			breakpoint: 576,
// 			settings: {
// 				slidesToShow: 1,
// 				infinite: true,
// 			}
// 		},
// 	],
// });

// // $('.partners-wrapper .partners').slick({
// // 	arrows: true,
// // 	infinite: true,
// // 	slidesToShow: 5,
// // 	slidesToScroll: 5,
// // 	centerMode: false,
// // 	centerPadding: '0px',
// // 	cssEase: 'linear',
// // 	autoplay: false,
// // 	dots: false,
// // 	rows: 2,
// // 	nextArrow: $('.partners-wrapper .slider-arrows .slider-next'),
// // 	prevArrow: $('.partners-wrapper .slider-arrows .slider-prev'),
// // 	responsive: [
// // 		{
// // 			breakpoint: 992,
// // 			settings: {
// // 				slidesToShow: 4,
// // 				slidesToScroll: 4,
// // 			}
// // 		},
// // 		{
// // 			breakpoint: 767,
// // 			settings: {
// // 				slidesToShow: 3,
// // 				slidesToScroll: 3,
// // 			}
// // 		},
// // 		{
// // 			breakpoint: 576,
// // 			settings: {
// // 				slidesToShow: 2,
// // 				slidesToScroll: 2,
// // 			}
// // 		},
// // 	],
// // });