'use strict';
angular.module('app', [])

.controller('AppVM', function(){
  this.width = 1;

  this.wrap = function(text, width){
    text = text || '';
    width = width || 1;
    width = width < 1 ? text.length : width;
    return wrap(text, width);
  };

  function wrap(text, width){
   
    function breakText(firstNChars, andThenBreakFrom){
      return text.slice(0, firstNChars) + '\n' +
        wrap(text.slice(andThenBreakFrom), width);
    }

    if (text.length <= width) { return text; }
    var indexLastSpaceInPrefix = text.slice(0, width+1).lastIndexOf(' ');
    if (indexLastSpaceInPrefix < 0) { 
      return breakText(width, width);
    } else {
      return breakText(indexLastSpaceInPrefix, indexLastSpaceInPrefix +1);
    };
  };

});
