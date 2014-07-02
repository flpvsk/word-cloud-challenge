/** @jsx React.DOM */

var React = require('react/addons');

var TopicInfo = React.createClass({
  render: function() {
    var sentiment = {
      positive: 0,
      negative: 0,
      neutral: 0
    };

    sentiment = React.addons.update(sentiment, {
      $merge: this.props.topic.sentiment || {}
    });

    console.log(sentiment);

    return (
        <article className="topic-info">
          <header>
            Information on topic:
            “
            <span className="topic-info__label">
              {this.props.topic.label}
            </span>
            ”
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
              Neutral Mentions:
              <span className="topic-info__neutral">
                {sentiment.neutral}
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
