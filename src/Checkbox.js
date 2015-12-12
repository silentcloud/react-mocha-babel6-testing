var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      done: this.props.done
    };
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
        <input type="checkbox" checked={this.state.done} onChange={this.onChange} />
        {this.state.done ? 'checked' : 'not checked'}
      </label>
    );
  },

});
