/* global describe, it */
var assert = require('assert');

describe('Storage', function() {

  var Storage = require('../../app/scripts/storage');

  it('should have getTopics method', function() {
    assert(Storage.getTopics);
    assert.equal(Object.prototype.toString.call(Storage.getTopics),
      '[object Function]');
  });


  describe('getTopics method', function() {
    it('should return promise', function() {
      var result = Storage.getTopics();

      assert(result);
      assert(result.then);
      assert.equal(Object.prototype.toString.call(result.then),
          '[object Function]');
    });
  });
});
