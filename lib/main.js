const DOMNodeCollection = require('./dom_node_collection');


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
