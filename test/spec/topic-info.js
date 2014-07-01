/* global describe, it */
var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    assert = require('assert');

describe('Topic Cloud', function() {
  var TopicInfo = require('../../app/scripts/topic-info');

  function renderTopicInfoFor(topic) {
    var topicInfo;

    topicInfo = TopicInfo({topic: topic});
    return TestUtils.renderIntoDocument(topicInfo);
  }


  it('should show topic name', function() {
    var topic,
        topicDOM,
        topicInfo;

    topic = {
      label: 'I love horses',
    };

    topicInfo = renderTopicInfoFor(topic);
    topicDOM = topicInfo.getDOMNode();

    assert.equal(topicDOM.querySelector('.topic-info__label').innerText,
      'I love horses');
  });


  it('should show total mentions', function() {
    var topic,
        topicDOM,
        topicInfo;

    topic = {
      volume: 15,
    };

    topicInfo = renderTopicInfoFor(topic);
    topicDOM = topicInfo.getDOMNode();

    assert.equal(topicDOM.querySelector('.topic-info__volume').innerText,
      '15');
  });


  it('should show positive mentions', function() {
    var topic,
        topicDOM,
        positiveNode,
        topicInfo;

    topic = {
      sentiment: {
        positive: 29
      }
    };

    topicInfo = renderTopicInfoFor(topic);

    topicDOM = topicInfo.getDOMNode();
    positiveNode = topicDOM.querySelector('.topic-info__positive');
    assert.equal(positiveNode.innerText, '29');
  });


});
