/* global describe, it */
var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    assert = require('assert');

describe('topic', function() {
  var Topic = require('../../app/scripts/topic');


  it('should contain label text', function() {
    var label = 'abrakadabra',
        topic = Topic({label: label}),
        topicText;

    topic = TestUtils.renderIntoDocument(topic);
    topicText = topic.getDOMNode().innerText;

    assert.equal(topicText, label);
  });


  it('should have appropriate size', function() {
    var topic,
        topicClassList,
        size;

    for (size = 1; size <= 6; size++) {
      topic = Topic({size: size});
      topic = TestUtils.renderIntoDocument(topic);

      topicClassList = topic.getDOMNode().classList;
      assert(topicClassList.contains('topic--size-' + size),
        topicClassList + ' does not contain "topic--size-' + size + '"');
    }
  });


  it('should be positive with a sentimentScore > 60', function () {
    var topic, topicClassList;

    topic = Topic({sentimentScore: 61})
    topic = TestUtils.renderIntoDocument(topic);

    topicClassList = topic.getDOMNode().classList;

    assert(topicClassList.contains('topic--sentiment-positive'),
      topicClassList + ' does not contain "topic--sentiment-positive"');
  });


  it('should be negative with a sentimentScore < 40', function () {
    var topic, topicClassList;

    topic = Topic({sentimentScore: 39})
    topic = TestUtils.renderIntoDocument(topic);

    topicClassList = topic.getDOMNode().classList;

    assert(topicClassList.contains('topic--sentiment-negative'),
      topicClassList + ' does not contain "topic--sentiment-negative"');
  });


  it('should be neutral with a 40 < sentimentScore < 60', function () {
    var topic, topicClassList;

    [41, 59].forEach(function(score) {
      topic = Topic({sentimentScore: score})
      topic = TestUtils.renderIntoDocument(topic);

      topicClassList = topic.getDOMNode().classList;

      assert(topicClassList.contains('topic--sentiment-neutral'),
        topicClassList + ' does not contain "topic--sentiment-neutral"');
    });
  });


  it('should call attached callback on click', function() {
    var topic, called = false;

    topic = Topic({
      onClick: function() {
        called = true;
      }
    });

    topic = TestUtils.renderIntoDocument(topic);
    TestUtils.Simulate.click(topic.getDOMNode());

    assert(called, 'Callback was not called!');
  });
});
