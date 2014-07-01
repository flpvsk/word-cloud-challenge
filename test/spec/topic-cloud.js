/* global describe, it */
var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    Topic = require('../../app/scripts/topic')
    assert = require('assert');

describe('Topic Cloud', function() {
  var TopicCloud = require('../../app/scripts/topic-cloud');

  it('should render all passed topics', function() {
    var topicCloud, topicNodes;

    topicCloud = TopicCloud({
      topics: [
        {}, {}, {}
      ]
    });

    topicCloud = TestUtils.renderIntoDocument(topicCloud);

    topicNodes = TestUtils.scryRenderedComponentsWithType(topicCloud,
        Topic);

    assert.equal(topicNodes.length, 3);
  });


  it('should assign a key for topic node to id', function() {
    var topicId = 'topic-123',
        topicCloud,
        topicNode;


    topicCloud = TopicCloud({
      topics: [
        {id: topicId}
      ]
    });

    topicCloud = TestUtils.renderIntoDocument(topicCloud);

    topicNode = TestUtils.findRenderedComponentWithType(topicCloud, Topic);
    assert.equal(topicNode.props.key, topicId);
  });
});
