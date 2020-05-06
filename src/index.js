import _ from 'lodash';
import $ from 'jquery';
import "slick-carousel";

function hopIcon() {
	function restoreIconPosition() {
		this.querySelector('.contact-icon').removeAttribute('id', 'rotate-icon');
	}
	this.querySelector('.contact-icon').setAttribute('id', 'rotate-contact-icon');
	this.addEventListener('mouseout', restoreIconPosition, true);
}

function hopContactIcons() {
	const container = document.querySelectorAll('.contact');
	for (let i = 0; i < container.length; i++) {
		container[i].addEventListener('mouseover', hopIcon, true);
	}
}
hopContactIcons();

function showMenu() {
	function hideMenu() {
		this.querySelector('.image-menu').removeAttribute('id', 'image-menu-up');
		this.querySelector('.image-menu').setAttribute('id', 'image-menu-down');
	}
	this.querySelector('.image-menu').setAttribute('id', 'image-menu-up');
	this.addEventListener('mouseout', hideMenu, true);
}

const imagePanningMenu = () => {
	const images = document.querySelectorAll('.image-panning');
	for (let i = 0; i < images.length; i++) {
		images[i].addEventListener('mouseover', showMenu, true);
	}
}
imagePanningMenu();

function scroll() {
	const scrollY = window.scrollY;
	const scrollX = window.scrollX;
	//console.log(scrollY);
	if (scrollY == 1000) {
		//alert('ScrollY is equal to ' + scrollY);
	}
}

document.addEventListener('scroll', scroll, true);

function scrollTo(e) {
	const projects = document.querySelectorAll('.image-menu-header > a');
	const index = [...projects].indexOf(e.target);
	const arrayCoords = [1388, 2550];
	window.scrollTo({
		top: arrayCoords[index],
		behavior: 'smooth'
	});
}

const projectSelect = () => {
	const projects = document.querySelectorAll('.image-menu-header > a');
	for (let i = 0; i < projects.length; i++) {
		projects[i].addEventListener('click', scrollTo, true);
	}
}

projectSelect();

const closeMenu = (showMenu, blurFilter) => {
	blurFilter.removeAttribute('id', 'menu-blur-on');
	showMenu.setAttribute('id', 'hide-mobile-menu');
	setTimeout(() => {
		showMenu.setAttribute('id', 'no-display');
	}, 500)
}

function mobileMenu() {
	const blurFilter = document.querySelector('.menu-no-blur');
	const showMenu = document.querySelector('#no-display');

	const displayMobileMenu = (e) => {
        if (showMenu.id === 'hide-mobile-menu' || showMenu.id === 'no-display') {
    	    blurFilter.setAttribute('id', 'menu-blur-on');
    	    showMenu.setAttribute('id', 'show-mobile-menu');
    	} else if (showMenu.id === 'show-mobile-menu') {
    		e.target.addEventListener('click', closeMenu(showMenu, blurFilter), false);
        }
    }
    document.getElementById('mobile-menu-button').addEventListener('click', displayMobileMenu);
}
mobileMenu();




$('.single-item').slick({
	dots: true,
	arrows: true,
	autoplay: true,
	//slidesToShow: 1,
	fade: true,
	centerMode: true,
	horizontal: true,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	swipe: true
});


const fruitBasket = ['Apple', 'Orange', 'Grapefruit', 'Tomato', 'Cucumber', 'Peach'];

const findVeggies = fruitBasket.filter(veg => veg.toLowerCase() !== 'cucumber');

console.log(findVeggies);

/*
$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    center: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    //autoWidth: true,
    autoHeight: true,
    autoplayHoverPause: true,
    animateOut: 'fadeOut'
});
*/