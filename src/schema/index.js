import { GraphQLSchema } from 'graphql';
import RootQueryType from './root_query';
import MutationType from './mutation';

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType
});
