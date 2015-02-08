var React, App;

React = require('react');
App = require('./views/app.jsx');
$ = require('jquery');

$(document).ready(function () {
  React.render(
    <App />,
    document.getElementById('main')
  );
});
