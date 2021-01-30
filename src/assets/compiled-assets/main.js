/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var SITE;SITE =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/index.scss":
/*!***********************************!*\
  !*** ./src/assets/css/index.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://SITE/./src/assets/css/index.scss?");

/***/ }),

/***/ "./src/assets/js/_cursor.js":
/*!**********************************!*\
  !*** ./src/assets/js/_cursor.js ***!
  \**********************************/
/***/ (function() {

eval("const cursor = document.querySelector('.cursor')\r\nif (cursor) {\r\n\r\n\tcursor.style.opacity = 1\r\n\r\n\twindow.onmousemove = (e) => {\r\n\t\trequestAnimationFrame(() => {\r\n\t\t\tcursor.style.opacity = 1\r\n\t\t\tlet x = `${(e.pageX - scrollX - 40)}px`,\r\n\t\t\t\ty = `${(e.pageY - scrollY - 40)}px`\r\n\t\t\tcursor.style.setProperty('--top', y)\r\n\t\t\tcursor.style.setProperty('--left', x)\r\n\t\t})\r\n\t}\r\n\r\n\t// window.onmouseenter = (e) => {\r\n\t// \tconsole.log(\"enter\", e)\r\n\t// \trequestAnimationFrame(() => {\r\n\t// \t\tcursor.style.opacity = 1\r\n\t// \t})\r\n\t// }\r\n\r\n\twindow.onmouseout = (e) => {\r\n\t\trequestAnimationFrame(() => {\r\n\t\t\tcursor.style.opacity = 0\r\n\t\t})\r\n\t}\r\n\r\n\t//todo window events or speciefic events\r\n\tdocument.addEventListener('click', () => {\r\n\t\tcursor.classList.add(\"expand\")\r\n\t\tsetTimeout(() => {\r\n\t\t\tcursor.classList.remove(\"expand\")\r\n\t\t}, 600)\r\n\t})\r\n}\n\n//# sourceURL=webpack://SITE/./src/assets/js/_cursor.js?");

/***/ }),

/***/ "./src/assets/js/_header.js":
/*!**********************************!*\
  !*** ./src/assets/js/_header.js ***!
  \**********************************/
/***/ (function() {

eval("// import Headroom from \"headroom.js\";\r\n// grab an element\r\n// var scroll_direction = document.querySelector(\".has-scroll-init\");\r\n// var htmlelm = document.querySelector(\"html\");\r\n// // console.log(\"scroll_direction\", scroll_direction.dataset.direction)\r\n// console.log(\"htmlelm\", htmlelm)\r\n\r\n\r\n// window.onscroll = () => {\r\n// \tconsole.log(\"scroll_direction\")\r\n// }\r\n\r\n\r\n\r\n\r\n// // construct an instance of Headroom, passing the element\r\n// var headroom = new Headroom(myElement);\r\n// // initialise\r\n// headroom.init();\n\n//# sourceURL=webpack://SITE/./src/assets/js/_header.js?");

/***/ }),

/***/ "./src/assets/js/_test.js":
/*!********************************!*\
  !*** ./src/assets/js/_test.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locomotive-scroll */ \"./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js\");\n\r\n\r\n\r\n\r\ngsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger)\r\nconsole.log('locomotive imnages started')\r\ndocument.documentElement.classList.add('is-loaded');\r\ndocument.documentElement.classList.remove('is-loading');\r\n// const scroll = new LocomotiveScroll({\r\n// \tel: document.querySelector('[data-scroll-container]'),\r\n// \tsmooth: true\r\n// });\r\n// const locoScroll = new LocomotiveScroll({\r\n// \tel: document.querySelector('.locomotive-images'),\r\n// \tsmooth: true\r\n// })\r\n\r\nconst init = (elem) => {\r\n\tconsole.clear()\r\n\tconsole.log('locomotive images init started')\r\n\r\n\tconst locoScroll = new locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__.default({\r\n\t\tel: elem,\r\n\t\tsmooth: true,\r\n\t\tsmoothMobile: true,\r\n\t\tgetSpeed: true,\r\n\t\tgetDirection: true,\r\n\r\n\t})\r\n\r\n\tlet dynamicBackgrounds = [];\r\n\tlet dynamicColorElements = [];\r\n\r\n\t// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)\r\n\tlocoScroll.on(\"scroll\", (instance) => {\r\n\t\tdocument.documentElement.setAttribute('data-direction', instance.direction)\r\n\t\tdocument.documentElement.setAttribute('data-speed', instance.speed)\r\n\t\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.update\r\n\r\n\t\t// if (instance.direction == \"up\") {\r\n\t\t// \tconsole.log(\"data-direction\", instance.direction)\r\n\t\t// }\r\n\r\n\t\t// if (instance.direction == \"down\") {\r\n\t\t// \tconsole.log(\"data-direction\", instance.direction)\r\n\t\t// }\r\n\r\n\t});\r\n\r\n\tlocoScroll.on('call', (value, way, obj) => {\r\n\t\tif (value === 'dynamicBackground') {\r\n\t\t\tif (way === 'enter') {\r\n\t\t\t\tdynamicBackgrounds.push({\r\n\t\t\t\t\tid: obj.id,\r\n\t\t\t\t\tel: obj.el\r\n\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\tfor (var i = 0; i < dynamicBackgrounds.length; i++) {\r\n\t\t\t\t\tif (obj.id === dynamicBackgrounds[i].id) {\r\n\t\t\t\t\t\tdynamicBackgrounds.splice(i, 1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} else if (value === 'dynamicColor') {\r\n\t\t\tif (way === 'enter') {\r\n\t\t\t\tdynamicColorElements.push({\r\n\t\t\t\t\tid: obj.id,\r\n\t\t\t\t\tel: obj.el\r\n\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\tfor (var i = 0; i < dynamicColorElements.length; i++) {\r\n\t\t\t\t\tif (obj.id === dynamicColorElements[i].id) {\r\n\t\t\t\t\t\tdynamicColorElements.splice(i, 1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\r\n\t// tell ScrollTrigger to use these proxy methods for the \".smooth-scroll\" element since Locomotive Scroll is hijacking things\r\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.scrollerProxy(elem, {\r\n\t\tscrollTop(value) {\r\n\t\t\treturn arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;\r\n\t\t}, // we don't have to define a scrollLeft because we're only scrolling vertically.\r\n\t\tgetBoundingClientRect() {\r\n\t\t\treturn { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };\r\n\t\t},\r\n\t\t// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).\r\n\t\t// pinType: document.querySelector(\".scrollContainer\").style.transform ? \"transform\" : \"fixed\"\r\n\t\t// pinType: elem.style.transform ? \"transform\" : \"fixed\"\r\n\t});\r\n\r\n\t//////////////////////////////////////////////////////////\r\n\t//////////////////////////////////////////////////////////\r\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({\r\n\t\ttrigger: '.image-mask',\r\n\t\tscroller: elem,\r\n\t\tstart: 'top+=30% 50%',\r\n\t\tend: 'bottom-=40% 50%',\r\n\t\tanimation: gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.to('.image-mask', { backgroundSize: '120%' }),\r\n\t\tscrub: 2,\r\n\t\t// markers: true\r\n\t})\r\n\r\n\r\n\tvar siteHeader = document.querySelector('.headroom');\r\n\tconsole.log('locomotive images init started', siteHeader)\r\n\tvar header_progress = 0;\r\n\tvar header_direction = 1;\r\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({\r\n\t\ttrigger: \".main_content\",\r\n\t\tscroller: elem,\r\n\t\tstart: \"top top\",\r\n\t\tonUpdate: self => {\r\n\t\t\tconsole.log(\"progress:\", self.progress.toFixed(3), \"direction:\", self.direction, \"velocity\", self.getVelocity());\r\n\t\t\theader_progress = self.progress.toFixed(2);\r\n\t\t\theader_direction = self.direction;\r\n\r\n\t\t\tif (header_direction === 1) {\r\n\t\t\t\tsiteHeader.classList.remove(\"headroom--pinned\");\r\n\t\t\t\tsiteHeader.classList.add(\"headroom--unpinned\");\r\n\t\t\t} else {\r\n\t\t\t\tsiteHeader.classList.remove(\"headroom--unpinned\");\r\n\t\t\t\tsiteHeader.classList.add(\"headroom--pinned\");\r\n\t\t\t}\r\n\t\t\t// siteHeader.className = newClassName;\r\n\t\t}\r\n\t});\r\n\t//////////////////////////////////////////////////////////\r\n\t//////////////////////////////////////////////////////////\r\n\r\n\t// const tl = gsap.from(\".project--heading--span\", {\r\n\t// \ty: \"-100%\",\r\n\t// \tstagger: {\r\n\t// \t\tamount: 0.5,\r\n\t// \t\tfrom: \"center\"\r\n\t// \t}\r\n\t// });\r\n\r\n\t// const image_animation = gsap.to(\".project--image-img\", {\r\n\t// \tscale: 1.3\r\n\t// });\r\n\r\n\t// ScrollTrigger.create({\r\n\t// \ttrigger: \".project-content\",\r\n\t// \tscroller: elem,\r\n\t// \t// scrub: true,\r\n\t// \tpin: true,\r\n\t// \tend: \"+=100%\",\r\n\t// \tanimation: tl\r\n\t// });\r\n\r\n\t// ScrollTrigger.create({\r\n\t// \ttrigger: \".project--image\",\r\n\t// \tscroller: elem,\r\n\t// \t// scrub: true,\r\n\t// \tstart: \"top\",\r\n\t// \tend: \"+=100%\",\r\n\t// \tanimation: image_animation\r\n\t// });\r\n\r\n\t// const test = gsap.to(\".project\", {\r\n\t// \ty: 100,\r\n\t// \tstagger: {\r\n\t// \t\tamount: 0.3\r\n\t// \t}\r\n\t// });\r\n\r\n\t// ScrollTrigger.create({\r\n\t// \ttrigger: \".project\",\r\n\t// \tscroller: elem,\r\n\t// \t// scrub: 0.16,\r\n\t// \tanimation: tl\r\n\t// });\r\n\r\n\r\n\t//////////////////////////////////////////////////////////\r\n\t//////////////////////////////////////////////////////////\r\n\r\n\r\n\t// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.\r\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.addEventListener(\"refresh\", () => locoScroll.update());\r\n\r\n\t// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.\r\n\tgsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.refresh();\r\n}\r\n\r\ndocument.querySelectorAll('.js-locomotive-images').forEach(init)\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_test.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ \"./src/assets/css/index.scss\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cursor.js */ \"./src/assets/js/_cursor.js\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cursor_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_test.js */ \"./src/assets/js/_test.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_header.js */ \"./src/assets/js/_header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\nconsole.log('Hello again');\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/assets/js/index.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSITE"] = self["webpackChunkSITE"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;