/* global describe, it */
var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    Topic = require('../../app/scripts/topic')
    assert = require('assert');

describe('Topic Cloud', function() {
  var TopicCloud = require('../../app/scripts/topic-cloud');

  function oneTopicWithId(id) {
    return {
      topics: [
        {id: id}
      ]
    }
  }

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


    topicCloud = TopicCloud(oneTopicWithId(topicId));
    topicCloud = TestUtils.renderIntoDocument(topicCloud);

    topicNode = TestUtils.findRenderedComponentWithType(topicCloud, Topic);
    assert.equal(topicNode.props.key, topicId);
  });


  it('should attach onclick callback to topic node', function () {
    var topicCloud,
        topicNode;

    topicCloud = TopicCloud(oneTopicWithId('topic-id'));
    topicCloud = TestUtils.renderIntoDocument(topicCloud);

    topicNode = TestUtils.findRenderedComponentWithType(topicCloud, Topic);
    assert(topicNode.props.onClick);
  });


  it('should change selected topic, when it gets clicked', function() {
    var topic1 = {id: 'topic1'},
        topic2 = {id: 'topic2'},
        topics = [topic1, topic2],
        topicCloud,

    topicCloud = TopicCloud({topics: topics});
    topicCloud = TestUtils.renderIntoDocument(topicCloud);
    // Set selected topic to `topic1`
    topicCloud.setState({'selectedTopic': topic1});
    // Immitate callback call for `topic2`
    topicCloud.selectTopic(topic2)();

    assert.equal(topic2, topicCloud.state.selectedTopic);
  });


  it('should pass `selected` prop to child', function() {
    var topic1 = {id: 'topic1'},
        topic2 = {id: 'topic2'},
        topicNodes,
        topicCloud;

    topicCloud = TopicCloud({topics: [topic1, topic2]});
    topicCloud = TestUtils.renderIntoDocument(topicCloud);
    topicCloud.setState({'selectedTopic': topic1});


    topicNodes = TestUtils.scryRenderedComponentsWithType(topicCloud,
        Topic);
    topicNodes.forEach(function (topicNode) {
      console.log(topicNode.props);
      if (topicNode.props.key === 'topic1') {
        assert(topicNode.props.selected, 'topic1 should be selected');
      }

      if (topicNode.props.key !== 'topic1') {
        assert(!topicNode.props.selected,
          topicNode.props.key + ' should not be selected');
      }
    });
  });
});
