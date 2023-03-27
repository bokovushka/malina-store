import Swiper from 'swiper/bundle';

//swiper-wallpaper-collection-thumbs
var SwiperWallpaperCollectionThumbs = new Swiper('.swiper-wallpaper-collection-thumbs', {
	slidesPerView: 2,
	spaceBetween: 10,
	freeMode: true,
	watchSlidesProgress: true,
});

//swiper-wallpaper-collection
var SwiperWallpaperCollection = new Swiper('.swiper-wallpaper-collection', {
	grabCursor: true,
	navigation: {
		nextEl: ".banner-top .swiper-buttons .button-slider-next",
		prevEl: ".banner-top .swiper-buttons .button-slider-prev",
	},
	thumbs: {
		swiper: SwiperWallpaperCollectionThumbs,
	},
});

//swiper-wallpaper-collection
var SwiperCardsProducts = new Swiper('.swiper-cards-products', {
	spaceBetween: 16,
	navigation: {
		nextEl: ".product-collection-slider .swiper-buttons .button-slider-next",
		prevEl: ".product-collection-slider .swiper-buttons .button-slider-prev",
	},
	pagination: {
		el: ".product-collection-slider .swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		1200: {
			slidesPerView: 4,
			spaceBetween: 32,
		},
		768: {
			slidesPerView: 3,
		},
		375: {
			spaceBetween: 20,
			slidesPerView: 2,
			grid: {
				rows: 2,
				fill: "row",
			},
		}
	},
});

//swiper-collection-preview
var SwiperCollectionPreview = new Swiper('.swiper-collection-preview', {
	slidesPerView: 1,
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-collection-preview .swiper-buttons .button-slider-next",
		prevEl: ".swiper-collection-preview .swiper-buttons .button-slider-prev",
	},
});