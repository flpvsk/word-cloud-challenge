/** @jsx React.DOM */

var React = require('react/addons'),
    Topic = require('./topic'),
    TopicInfo = require('./topic-info');

var TopicCloud = React.createClass({

  getInitialState: function() {
    return {selectedTopic: this.props.topics[0]};
  },


  selectTopic: function(topicData) {
    return function() {
      this.setState({selectedTopic: topicData});
    }.bind(this);
  },


  render: function() {
    var topics = this.props.topics,
        minVolume = Infinity,
        maxVolume = -Infinity,
        volumeStep,
        topicNodes;

    topics.forEach(function(topic) {
      if (topic.volume < minVolume) minVolume = topic.volume;
      if (topic.volume > maxVolume) maxVolume = topic.volume;
    });
    // 5 = number of available sizes - 1
    volumeStep = (maxVolume - minVolume) / 5;

    topicNodes = topics.map(function(topicData) {
      var isSelected,
          size;

      isSelected = this.state.selectedTopic === topicData;
      size = Math.floor((topicData.volume - minVolume) / volumeStep) + 1;

      return <Topic
          key={topicData.id}
          onClick={this.selectTopic(topicData)}
          selected={isSelected}
          label={topicData.label}
          size={size}
          sentimentScore={topicData.sentimentScore} />
    }.bind(this));

    return (
        <div className="topic-cloud">
          <div className="topics">
            {topicNodes}
          </div>
          <TopicInfo topic={this.state.selectedTopic} />
        </div>
    );
  }

});

module.exports = TopicCloud;
