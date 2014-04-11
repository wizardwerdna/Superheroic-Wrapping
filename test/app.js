'use strict';
describe('AppVM', function(){
  var vm = {};
  beforeEach(function(){
    module('app');
    inject(function($controller){
      vm = $controller('AppVM');
    });
  });
  function test(str, width, result){
    expect(vm.wrap(str, width)).toBe(result);
  }
  describe('wrap(text, width)', function(){
    it('should not wrap when width >= text length', function(){
      test('a', 1, 'a');
      test('b', 1, 'b');
      test('ab', 2, 'ab');
    });
    it('should wrap non-spaced lines when width less than length', function(){
      test('ab',1, 'a\nb');
      test('ba',1, 'b\na');
      test('abc',2, 'ab\nc');
      test('abcde', 2, 'ab\ncd\ne');
    });
    it('', function(){
      test('a b', 1, 'a\nb');
      test('b a', 1, 'b\na');
      test('ab c', 3, 'ab\nc');
      test('a b c', 1, 'a\nb\nc');
    });
  });
});
