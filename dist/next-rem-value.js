(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.remValue = function (inRem) {
    var value = inRem.slice(0, -3);
    var rootSize = parseFloat( document.documentElement.style.fontSize );
    if(rootSize){
      return value * rootSize;
    }
    return 0;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.remValue;
  }

}());
