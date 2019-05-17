import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} from 'graphql';
import { OrderType, OrderInputType } from './order';

const MutationType = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    addOrder: {
      type: OrderType,
      description: 'Add Order',
      args: {
        order: { type: new GraphQLNonNull(OrderInputType) }
      },
      resolve: (value, { order }) => {
        return { result: order.card === 2 ? 'OK' : 'FALHA' };
      }
    }
  })
});

export default MutationType;
