/** @jsx React.DOM */

var React = require('react/addons'),
    Topic = require('./topic');

var TopicCloud = React.createClass({

  render: function() {
    var topicNodes;

    topicNodes = this.props.topics.map(function(topicData) {
      return <Topic
          key={topicData.id}
          label={topicData.label}
          sentimentScore={topicData.senimentScore} />
    });

    return (
        <div>
          {topicNodes}
        </div>
    );
  }

});

module.exports = TopicCloud;
