/** @jsx React.DOM */

var React = require('react');
var ReactTable = require('./ReactTable.js');
var fakeData = require('../models/fakeData.js');

var ReactApp = React.createClass({

  render: function() {
    return (
      <div id="table-area">
        <ReactTable data={fakeData}></ReactTable>
      </div>
    );
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;
