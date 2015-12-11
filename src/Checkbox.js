var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      done: this.props.done
    };
  },

  componentDidMount: function() {
    this.setDone(this.refs.done.checked);
  },

  onChange: function(event) {
    this.setDone(event.target.checked);
  },

  setDone: function(done) {
    this.setState({
      done: !!done
    });
  },

  render: function() {
    return (
      <label>
        <input ref="done" type="checkbox" defaultChecked={this.state.done} onChange={this.onChange} />
        {this.props.name}
      </label>
    );
  },

});
