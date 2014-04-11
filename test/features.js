'use strict';
describe('Superheroic Wrapping', function(){
  var page;
  beforeEach(function(){
    module('app', 'index.html');
    inject(function($compile, $rootScope, $templateCache){
      page = $compile(
        $templateCache.get('index.html')
      )($rootScope);
      $rootScope.$digest();
    });
  });
  describe('FEATURE: a line wrapping page', function(){
    it('SCENARIO: width is longer than the text', function(){
      page.find('.width').$type('6');
      page.find('.text').$type('abcde');
      expect(page.find('.wrap').text()).toBe('abcde');
    });
    it('SCENARIO: width is shorter than the text', function(){
      page.find('.width').$type('3');
      page.find('.text').$type('abcde');
      expect(page.find('.wrap').text()).toBe('abc\nde');
    });
  });
});
