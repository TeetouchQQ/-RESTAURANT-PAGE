/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction About(){\r\n    var Info = document.createElement('div');\r\n    Info.className = 'Info';\r\n    Info.id = 'Info';\r\n\r\n    var element = document.getElementById('content');\r\n\r\n\r\n    for(var i=1;i<3;i++){\r\n        var MenuImg = document.createElement('img');\r\n        MenuImg.setAttribute('src','images/about'+ i +'.jpg')\r\n        MenuImg.id = 'Menu'+i;\r\n        MenuImg.className = 'MenuImg';\r\n\r\n   \r\n        \r\n        \r\n        \r\n    \r\n    \r\n    \r\n        Info.appendChild(MenuImg);\r\n\r\n     \r\n    \r\n\r\n\r\n    }\r\n\r\n    element.appendChild(Info);\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://restaurant-page/./src/About.js?");

/***/ }),

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Contact(){\r\n    var Info = document.createElement('div');\r\n    Info.className = 'Info';\r\n    Info.id = 'Info';\r\n\r\n    var element = document.getElementById('content');\r\n    var contact = document.createElement('p');\r\n    contact.id = 'Pcontact';\r\n    contact.className = 'Pcontact';\r\n    var linebreak = document.createElement(\"br\");\r\n    var text = document.createTextNode('สอบถามข้อมูลเพิ่มเติม Kiin at The Monttra Pattaya Tel : 038 306 333 ');\r\n    var text1 = document.createTextNode('Website : www.themonttra.com/dining.html Google map : g.page/themonttrapattaya?share');\r\n    var text2 = document.createTextNode('ติดตามและเที่ยวไปกับเรา ไปป่ะล่ะ ');\r\n    var text3= document.createTextNode('Facebook : https://www.facebook.com/paipalaa');\r\n    var text4 = document.createTextNode('instagram : https://www.instagram.com/paipala_ อ่านต่อได้ที่ : https://th.readme.me/p/28755');\r\n\r\n    contact.appendChild(text);\r\n    contact.appendChild(document.createElement(\"br\"));\r\n    contact.appendChild(text1);\r\n    contact.appendChild(document.createElement(\"br\"));\r\n    contact.appendChild(text2);\r\n    contact.appendChild(document.createElement(\"br\"));\r\n    contact.appendChild(text3);\r\n    contact.appendChild(document.createElement(\"br\"));\r\n    contact.appendChild(text4);\r\n    \r\n    Info.appendChild(contact)\r\n    element.appendChild(Info);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://restaurant-page/./src/Contact.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Menu(){\r\n    var Menulist = ['','Pink Cappuccino','ปลาแห้งแตงโม','ม้าฮ่อ','กุ้งย่างตะไคร้','ต้มข่าหอยตลับ']\r\n    var Info = document.createElement('div');\r\n    Info.className = 'Info';\r\n    Info.id = 'Info';\r\n\r\n    var element = document.getElementById('content');\r\n\r\n\r\n    for(var i=1;i<5;i++){\r\n        var MenuImg = document.createElement('img');\r\n        MenuImg.setAttribute('src','images/menu'+ i +'.jpg')\r\n        MenuImg.id = 'Menu'+i;\r\n        MenuImg.className = 'MenuImg';\r\n\r\n        var Pmenu = document.createElement('p');\r\n        var Passage = document.createTextNode(Menulist[i])\r\n        \r\n        Pmenu.appendChild(Passage);\r\n        Pmenu.className = 'Pmenu';\r\n        \r\n        \r\n        \r\n    \r\n    \r\n    \r\n        Info.appendChild(MenuImg);\r\n        Info.appendChild(Pmenu);\r\n     \r\n    \r\n\r\n\r\n    }\r\n\r\n    element.appendChild(Info);\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Header(){\r\n    console.log('pass')\r\n    var element = document.getElementById('content');\r\n\r\n\r\n    const container = document.createElement('div');\r\n    container.className = 'container'\r\n    container.id = 'container'\r\n    var PageList = ['Home','Menu','About','Contact']\r\n\r\n    const navbar = document.createElement('div');\r\n    navbar.className = 'navbar'\r\n    navbar.id = 'navbar'\r\n\r\n    const ul = document.createElement('ul');\r\n    \r\n\r\n    for(var i=0;i<4;i++){\r\n        console.log(i);\r\n        const li = document.createElement('li');\r\n        li.className='li' + i;\r\n        li.id='li' + i;\r\n        var a = document.createElement('a')\r\n        var text = document.createTextNode(PageList[i]);\r\n        a.appendChild(text);\r\n        a.href = '#';\r\n\r\n        li.appendChild(a);\r\n        ul.appendChild(li);\r\n    }\r\n    navbar.appendChild(ul)\r\n\r\n\r\n    element.appendChild(navbar);\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.js */ \"./src/info.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact.js */ \"./src/Contact.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_info_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n\r\n\r\nconst Home = document.getElementById('li0');\r\nconst menu = document.getElementById('li1');\r\nconst about = document.getElementById('li2');\r\nconst contact = document.getElementById('li3');\r\nconst Content = document.getElementById('content');\r\n\r\n\r\nHome.addEventListener('click',()=>{\r\n    Content.removeChild(document.getElementById('Info'));\r\n    (0,_info_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\r\n})\r\nmenu.addEventListener('click',()=>{\r\n    Content.removeChild(document.getElementById('Info'));\r\n    (0,_Menu__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n\r\n})\r\ncontact.addEventListener('click',()=>{\r\n    Content.removeChild(document.getElementById('Info'));\r\n    (0,_Contact_js__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n\r\n})\r\nabout.addEventListener('click',()=>{\r\n    Content.removeChild(document.getElementById('Info'));\r\n    (0,_About_js__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n\r\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Info(){\r\n    var Info = document.createElement('div');\r\n    Info.className = 'Info';\r\n    Info.id = 'Info';\r\n\r\n    var element = document.getElementById('content');\r\n\r\n    var mainImg = document.createElement('img');\r\n    mainImg.setAttribute('src','images/main.png')\r\n    mainImg.id = 'mainImg';\r\n    mainImg.className = 'mainImg';\r\n\r\n\r\n    var mainPassage = document.createElement('p');\r\n    mainPassage.id = 'mainPassage';\r\n    mainPassage.className = 'mainPassage';\r\n    var text = document.createTextNode('\" Kiin - Original Thai Taste \" ที่นี่เป็นร้านอาหารเปิดใหม่ ที่ตั้งอยู่ใน โรงแรมมนตรา พัทยา ได้ยินว่าอยู่ในโรงแรมอย่าพึ่งตกใจ หากไม่ได้เข้าพักที่โรงแรมก็สามารถมาทานอาหารที่ร้านได้นะจ๊ะ ทางร้านมีเมนูอาหารให้เลือกหลากหลาย...')\r\n    mainPassage.appendChild(text);\r\n\r\n    Info.appendChild(mainImg)\r\n    Info.appendChild(mainPassage);\r\n\r\n    element.appendChild(Info);\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);\n\n//# sourceURL=webpack://restaurant-page/./src/info.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;