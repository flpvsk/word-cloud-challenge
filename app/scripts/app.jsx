/** @jsx React.DOM */

var React = require('react/addons'),
    TopicCloud = require('./topic-cloud'),
    Storage = require('./storage'),
    _ = require('lodash');

Storage.getTopics()
  .then(function(topicData) {
    topicData.topics = _.shuffle(topicData.topics);
    React.renderComponent(
      <TopicCloud topics={topicData.topics} />,
      document.querySelector('.app')
    );
  })
  // `catch` is reserved in IE9
  ['catch'](function(err) {
    console.error(err);
  });
