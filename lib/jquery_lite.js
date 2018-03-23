/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);


console.log("hello");




//Selects html elements based off of string you pass in
//e.g. selector could be ".className" and you get array back of all
//HTML elements with that class name
window.$l = function(selector) {
  let nodeList;

  if (typeof selector === 'string') {
    nodeList = document.querySelectorAll(selector);
    return new DOMNodeCollection(nodeList);
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  }

};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {

  constructor(nodes, func) {
    this.nodes = nodes;
    this.functions = [];

    let that = this;


    function check(readyCallback) {
      that.functions.push(readyCallback);
    }

    // if(document.readyState === 'complete'){
    //   // alert("done!");
    //   console.log(this.functions);
    //   for(let i = 0; i < this.functions.length; i++) {
    //     this.functions[i]();
    //   }
    // }
  }

  html(string) {
    if(string) {
      for(let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].innerHTML = string;
      }
    } else {
      return this.nodes[0].innerHTML;
    }
  }


  empty() {
    for(let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].innerHTML = "";
    }
  }


  append(element) {
      let newNode = new DOMNodeCollection(element);

      for(let i = 0; i < this.nodes.length; i++) {

        if(typeof element === 'string') {
            this.nodes[i].innerHTML += (element);

        } else {
        this.nodes[i].innerHTML += element.outerHTML;
      }
    }
  }

  children() {
    let children = [];

    for(let i = 0; i < this.nodes.length; i++) {
      children.push(this.nodes[i].children);
    }

    return new DOMNodeCollection(children);
  }

  parent() {
    let parents = [];

    for(let i = 0; i < this.nodes.length; i++) {
      parents.push(this.nodes[i].parentElement);
    }

    return parents;
  }


  on(eventType) {
    for(let i = 0; i < this.nodes.length; i++){
      this.nodes[i].addEventListener(eventType, () => {
        this.nodes[i].innerHTML = "test";
      });
    }
  }

  // off(eventType) {
  //   for(let i = 0; i < this.nodes.length; i++){
  //     this.nodes[i].removeEventListener(eventType), () => {
  //       this.nodes[i].innerHTML = "test";
  //     };
  //   }
  // }



}



module.exports = DOMNodeCollection;


/***/ })
/******/ ]);