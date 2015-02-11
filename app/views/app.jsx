var React, App, people, People;

React = require('react');
People = require('./people.jsx');

people = [
  {
    name: 'Austin',
    number: '(000) 111-2222'
  },
  {
    name: 'Bob',
    number: '(333) 444-5555'
  }
];


App = React.createClass({
  getInitialState: function () {
    return {
      people: people
    }
  },

  removePerson: function (i) {
    this.state.people.splice(i, 1);
    this.setState({
      people: this.state.people
    });
  },

  render: function () {
    return (
      <People people={people} removePerson={this.removePerson}/>
    );
  }
});

module.exports = App;
