var React, Person;

React = require('react');

Person = React.createClass({
  handleClick: function (e) {
    e.preventDefault();
    this.props.removePerson();
  },

  render: function () {
    return <li><div className="person">{this.props.name} {this.props.number}</div><img onClick={this.handleClick} src="close.png"></img></li>
  }
});

module.exports = Person;
