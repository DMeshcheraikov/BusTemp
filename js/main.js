'use strict';

function burgerMenu(selector) {
	let menu = $(selector),
		button = $('.burger-menu__button'),
		links = $('.burger-menu__link'),
		overlay = $('.burger-menu__overlay');

	button.click((e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.click(() => {
		toggleMenu();
	});

	overlay.click(() => {
		toggleMenu();
	});

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');		
	}
};

burgerMenu('.burger-menu');

$(document).ready(function () {
	$('.bg-grid').slick({
		slidesToShow: 4,
		infinite: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});


	$('.testimonial-grid').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});
});

