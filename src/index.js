import express from 'express';
import expressGraphQL from 'express-graphql';

import schema from './schema';

const app = express();
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);
app.listen(process.env.PORT || 4001);
