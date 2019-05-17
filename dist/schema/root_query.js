'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: function fields() {
    return {
      hello: {
        type: _graphql.GraphQLString,
        resolve: function resolve() {
          return 'world';
        }
      }
    };
  }
});