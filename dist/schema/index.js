'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _root_query = require('./root_query');

var _root_query2 = _interopRequireDefault(_root_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
  query: _root_query2.default
});