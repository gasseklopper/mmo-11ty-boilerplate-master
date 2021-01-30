import '../css/index.scss';
import './_test.js';

console.log('Hello again');

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger)
console.log('locomotive imnages started')
// document.documentElement.classList.add('is-loaded');
// document.documentElement.classList.remove('is-loading');
// const scroll = new LocomotiveScroll({
// 	el: document.querySelector('[data-scroll-container]'),
// 	smooth: true
// });
// const locoScroll = new LocomotiveScroll({
// 	el: document.querySelector('.locomotive-images'),
// 	smooth: true
// })




const cursor = document.querySelector('.cursor')
if (cursor) {

	cursor.style.opacity = 1

	window.onmousemove = (e) => {
		requestAnimationFrame(() => {
			cursor.style.opacity = 1
			let x = `${(e.pageX - scrollX - 40)}px`,
				y = `${(e.pageY - scrollY - 40)}px`
			cursor.style.setProperty('--top', y)
			cursor.style.setProperty('--left', x)
		})
	}

	// window.onmouseenter = (e) => {
	// 	console.log("enter", e)
	// 	requestAnimationFrame(() => {
	// 		cursor.style.opacity = 1
	// 	})
	// }

	window.onmouseout = (e) => {
		requestAnimationFrame(() => {
			cursor.style.opacity = 0
		})
	}

	//todo window events or speciefic events
	document.addEventListener('click', () => {
		cursor.classList.add("expand")
		setTimeout(() => {
			cursor.classList.remove("expand")
		}, 600)
	})
}
