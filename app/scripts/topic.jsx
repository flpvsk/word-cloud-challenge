/** @jsx React.DOM */

var React = require('react/addons');

var Topic = React.createClass({
  propTypes: {
    size: React.PropTypes.number.isRequired,
    sentimentScore: React.PropTypes.number.isRequired
  },

  render: function() {
    var text = this.props.label,
        topicCls = {},
        sentimentScore = this.props.sentimentScore,
        onClick = this.props.onClick,
        i;

    topicCls['topic--size-' + this.props.size] = true;
    topicCls['topic--sentiment-positive'] = sentimentScore > 60;
    topicCls['topic--sentiment-negative'] = sentimentScore < 40;
    topicCls['topic--sentiment-neutral'] = 40 < sentimentScore < 60;

    return (
      <a onClick={onClick} className={React.addons.classSet(topicCls)}>
        {text}
      </a>
    );
  }
});

module.exports = Topic;
