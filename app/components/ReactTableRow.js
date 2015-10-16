/** @jsx React.DOM */

var React = require('react');
var columns = require('../models/columnMeta.js');

var ReactTableRow = React.createClass({

  getInitialState: function () {
    return {data: {}};
  },
  render: function() {
    //console.log('ReactTableRow', 'render', '\ndata:', this.props.data, '\ncolumns:', columns);
    /*var cells = columns.map(function (column) {
      console.log('render', 'cell', column.columnName, this.props.data);
      return (<td>{this.props.data[column.columnName]}</td>);
    });
    return (<tr>{cells}</tr>);*/
    var data = this.props.data;
    var cells = columns.map(function (c) {
      return <td>{data[c.columnName]}</td>;
    });
    return <tr>{cells}</tr>;
  }
});

module.exports = ReactTableRow;
