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


  function containerText(component, selector) {
    var root = component.getDOMNode(),
        container = root.querySelector(selector);
    console.log(selector, container);
    return container.innerText;
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
        topicInfo;

    topic = {
      sentiment: {
        positive: 29
      }
    };

    topicInfo = renderTopicInfoFor(topic);

    assert.equal(containerText(topicInfo, '.topic-info__positive'), '29');
  });


  it('should show negative mentions', function() {
    var topic,
        topicDOM,
        topicInfo;

    topic = {
      sentiment: {
        negative: 14
      }
    };

    topicInfo = renderTopicInfoFor(topic);

    assert.equal(containerText(topicInfo, '.topic-info__negative'), '14');
  });


  it('should show neutral mentions', function() {
    var topic,
        topicDOM,
        topicInfo;

    topic = {
      sentiment: {
        neutral: 3
      }
    };

    topicInfo = renderTopicInfoFor(topic);

    assert.equal(containerText(topicInfo, '.topic-info__neutral'), '3');
  });


  it('should show zero if no sentiment', function() {
    var topic,
        topicDOM,
        topicInfo;

    topicInfo = renderTopicInfoFor({});

    assert.equal(containerText(topicInfo, '.topic-info__positive'), '0');
    assert.equal(containerText(topicInfo, '.topic-info__negative'), '0');
    assert.equal(containerText(topicInfo, '.topic-info__neutral'), '0');
  });
});
