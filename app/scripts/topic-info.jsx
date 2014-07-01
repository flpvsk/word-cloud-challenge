/** @jsx React.DOM */

var React = require('react/addons');

var TopicInfo = React.createClass({
  render: function() {
    return (
        <article>
          <header>
            Information on topic:
            &lquote;
            <span className="topic-info__label">
              {this.props.topic.label}
            </span>
            &rquote;
          </header>
        </article>
    );
  }
});

module.exports = TopicInfo;
