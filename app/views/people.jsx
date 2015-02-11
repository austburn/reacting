var React, Person, People;

React = require('react');
Person = require('./person.jsx');

People = React.createClass({
  render: function () {
    return (
      <ul>
        {this.props.people.map(function (person, i) {
          return <Person key={i} name={person.name} number={person.number} removePerson={this.props.removePerson.bind(this, i)} />
        }, this)}
      </ul>
    );
  }
});

module.exports = People;
