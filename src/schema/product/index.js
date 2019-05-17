import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat
} from 'graphql';

export default new GraphQLObjectType({
  name: 'ProductType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLFloat },
    amount: { type: GraphQLFloat },
    description: { type: GraphQLString }
  })
});

export const ProductInputType = new GraphQLInputObjectType({
  name: 'ProductInputType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLFloat },
    amount: { type: GraphQLFloat },
    description: { type: GraphQLString }
  })
});
