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
