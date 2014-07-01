/** @jsx React.DOM */

var React = require('react/addons'),
    Storage = require('./storage');

Storage.getTopics()
  .then(function(topicData) {
    React.renderComponent(
      <TopicCloud topics={topicsData.topics} />,
      document.getElementById('app')
    );
  });


