import _ from 'lodash';
import $ from 'jquery';
import slick from 'slick-carousel';

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
	const arrayCoords = [1388, 2299];
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

function mobileMenu() {
	const blurFilter = document.getElementById('mobile-blur-filter');
	const menu = document.querySelector('.mobile-menu');
	blurFilter.style.filter = 'blur(10px)';
	menu.setAttribute('id', 'show-menu');
}

document.getElementById('mobile-menu-button').addEventListener('click', mobileMenu, true);

$('.single-item').slick({
	dots: true,
	arrows: true,
	autoplay: true,
	fade: true,
	centerMode: true,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	swipe: true
});