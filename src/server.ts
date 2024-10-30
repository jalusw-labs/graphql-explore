import { ApolloServer } from "@apollo/server";

import * as user from "./schema/user.schema";

const createServer = () => {
  const server = new ApolloServer({
    typeDefs: [user.types],
    resolvers: [user.resolvers],
  });
  return server;
};

export default createServer;
