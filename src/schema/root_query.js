import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} from 'graphql';
import axios from 'axios';
import ProductType from './product/';

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    products: {
      type: GraphQLList(ProductType),
      args: {},
      resolve() {
        return axios
          .get('https://5cd9daf9eb39f80014a74edd.mockapi.io/product')
          .then(res => res.data);
      }
    },
    product: {
      type: ProductType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return axios
          .get(`https://5cd9daf9eb39f80014a74edd.mockapi.io/product/${id}`)
          .then(res => res.data);
      }
    }
  })
});
