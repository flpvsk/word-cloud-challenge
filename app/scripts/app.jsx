/** @jsx React.DOM */

var React = require('react/addons'),
    TopicCloud = require('./topic-cloud'),
    Storage = require('./storage');

Storage.getTopics()
  .then(function(topicData) {
    React.renderComponent(
      <TopicCloud topics={topicData.topics} />,
      document.querySelector('.app')
    );
  })
  // `catch` is reserved in IE9
  ['catch'](function(err) {
    console.error(err);
  });
