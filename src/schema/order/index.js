import {
  GraphQLList,
  GraphQLFloat,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType
} from 'graphql';
import { ProductInputType } from '../product';

const OrderItemInputType = new GraphQLInputObjectType({
  name: 'OrderItemInputType',
  fields: () => ({
    product: { type: ProductInputType },
    amount: { type: GraphQLFloat }
  })
});

export const OrderInputType = new GraphQLInputObjectType({
  name: 'OrderInput',
  fields: () => ({
    items: { type: GraphQLList(OrderItemInputType) },
    card: { type: GraphQLFloat }
  })
});

export const OrderType = new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    result: { type: GraphQLString }
  })
});
