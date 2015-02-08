var React, Person;

React = require('react');

Person = React.createClass({
  render: function () {
    return <li>{this.props.name} {this.props.number}</li>
  }
});

module.exports = Person;
