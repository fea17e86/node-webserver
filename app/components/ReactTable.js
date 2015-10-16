/** @jsx React.DOM */

var React = require('react');
var ReactTableRow = require('./ReactTableRow.js');

var ReactTable = React.createClass({

  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function() {
    console.log('ReactTable', 'data:', this.props.data);
  },
  render: function() {
    var rows = this.props.data.map(function (row) {
      return (<ReactTableRow data={row}></ReactTableRow>);
    });
    return (<table>{rows}</table>);
  }
});

module.exports = ReactTable;
