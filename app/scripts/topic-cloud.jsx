/** @jsx React.DOM */

var React = require('react/addons'),
    Topic = require('./topic');

var TopicCloud = React.createClass({

  onTopicClick: function(topicData) {
    return function() {
      // closuuuuure!!!
    }
  },

  render: function() {
    var topicNodes;

    topicNodes = this.props.topics.map(function(topicData) {
      return <Topic
          key={topicData.id}
          onClick={this.onTopicClick(topicData)}
          label={topicData.label}
          sentimentScore={topicData.senimentScore} />
    }.bind(this));

    return (
        <div>
          {topicNodes}
        </div>
    );
  }

});

module.exports = TopicCloud;
