/** @jsx React.DOM */

var React = require('react/addons'),
    TopicCloud = require('./topic-cloud'),
    Storage = require('./storage');

Storage.getTopics()
  .then(function(topicData) {
    console.log(document.getElementById('app'));
    React.renderComponent(
      <TopicCloud topics={topicData.topics} />,
      document.getElementById('app')
    );
  })
  // `catch` is reserved in IE9
  ['catch'](function(err) {
    console.error(err);
  });
