var React, Person, People;

React = require('react');
Person = require('./person.jsx');

People = React.createClass({
  render: function () {
    return (
      <ul>
        {this.props.people.map(function (person) {
          return <Person name={person.name} number={person.number} />
        })}
      </ul>
    );
  }
});

module.exports = People;
