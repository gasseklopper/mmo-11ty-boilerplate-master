import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger)
console.log('locomotive imnages started')
document.documentElement.classList.add('is-loaded');
document.documentElement.classList.remove('is-loading');
// const scroll = new LocomotiveScroll({
// 	el: document.querySelector('[data-scroll-container]'),
// 	smooth: true
// });
// const locoScroll = new LocomotiveScroll({
// 	el: document.querySelector('.locomotive-images'),
// 	smooth: true
// })

const init = (elem) => {
	console.clear()
	console.log('locomotive images init started')

	const locoScroll = new LocomotiveScroll({
		el: elem,
		smooth: true,
		smoothMobile: true,
		getSpeed: true,
		getDirection: true,

	})

	let dynamicBackgrounds = [];
	let dynamicColorElements = [];

	// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
	locoScroll.on("scroll", (instance) => {
		document.documentElement.setAttribute('data-direction', instance.direction)
		document.documentElement.setAttribute('data-speed', instance.speed)
		ScrollTrigger.update
	});

	locoScroll.on('call', (value, way, obj) => {
		if (value === 'dynamicBackground') {
			if (way === 'enter') {
				dynamicBackgrounds.push({
					id: obj.id,
					el: obj.el
				});
			} else {
				for (var i = 0; i < dynamicBackgrounds.length; i++) {
					if (obj.id === dynamicBackgrounds[i].id) {
						dynamicBackgrounds.splice(i, 1);
					}
				}
			}
		} else if (value === 'dynamicColor') {
			if (way === 'enter') {
				dynamicColorElements.push({
					id: obj.id,
					el: obj.el
				});
			} else {
				for (var i = 0; i < dynamicColorElements.length; i++) {
					if (obj.id === dynamicColorElements[i].id) {
						dynamicColorElements.splice(i, 1);
					}
				}
			}
		}
	});

	// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
	ScrollTrigger.scrollerProxy(elem, {
		scrollTop(value) {
			return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
		},
		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
		// pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
		// pinType: elem.style.transform ? "transform" : "fixed"
	});

	//////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////
	ScrollTrigger.create({
		trigger: '.image-mask',
		scroller: elem,
		start: 'top+=30% 50%',
		end: 'bottom-=40% 50%',
		animation: gsap.to('.image-mask', { backgroundSize: '120%' }),
		scrub: 2,
		// markers: true
	})

	//////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////

	// const tl = gsap.from(".project--heading--span", {
	// 	y: "-100%",
	// 	stagger: {
	// 		amount: 0.5,
	// 		from: "center"
	// 	}
	// });

	// const image_animation = gsap.to(".project--image-img", {
	// 	scale: 1.3
	// });

	// ScrollTrigger.create({
	// 	trigger: ".project-content",
	// 	scroller: elem,
	// 	// scrub: true,
	// 	pin: true,
	// 	end: "+=100%",
	// 	animation: tl
	// });

	// ScrollTrigger.create({
	// 	trigger: ".project--image",
	// 	scroller: elem,
	// 	// scrub: true,
	// 	start: "top",
	// 	end: "+=100%",
	// 	animation: image_animation
	// });

	// const test = gsap.to(".project", {
	// 	y: 100,
	// 	stagger: {
	// 		amount: 0.3
	// 	}
	// });

	// ScrollTrigger.create({
	// 	trigger: ".project",
	// 	scroller: elem,
	// 	// scrub: 0.16,
	// 	animation: tl
	// });


	//////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////


	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
	ScrollTrigger.refresh();
}

document.querySelectorAll('.js-locomotive-images').forEach(init)
