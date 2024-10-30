import { ApolloServer } from "@apollo/server";

import * as user from "./schema/user.schema";
import * as product from "./schema/product.schema";

const createServer = () => {
  const server = new ApolloServer({
    typeDefs: [user.types, product.types],
    resolvers: [user.resolvers, product.resolvers],
  });
  return server;
};

export default createServer;
