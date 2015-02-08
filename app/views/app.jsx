var React, App, people, People;

React = require('react');
People = require('./people.jsx');

people = [
  {
    name: 'Austin',
    number: '(xxx) xxx-xxxx'
  },
  {
    name: 'Bob',
    number: '(xxx) xxx-xxxx'
  }
];


App = React.createClass({
  render: function () {
    return (
      <People people={people} />
    );
  }
});

module.exports = App;
