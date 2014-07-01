/** @jsx React.DOM */

var React = require('react/addons');

var TopicInfo = React.createClass({
  render: function() {
    var sentiment = this.props.topic.sentiment || {};
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

          <ul className="topic-info__metrics">
            <li className="item--emphasize">
              Total Mentions:
              <span className="topic-info__volume">
                {this.props.topic.volume}
              </span>
            </li>

            <li>
              Positive Mentions:
              <span className="topic-info__positive">
                {sentiment.positive}
              </span>
            </li>

            <li>
              Negative Mentions:
              <span className="topic-info__negative">
                {sentiment.negative}
              </span>
            </li>
          </ul>
        </article>
    );
  }
});

module.exports = TopicInfo;
