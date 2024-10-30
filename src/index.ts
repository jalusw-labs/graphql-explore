import { startStandaloneServer } from "@apollo/server/standalone";
import config from "./config/config";
import mongoose from "mongoose";
import createServer from "./server";

(async () => {
  mongoose
    .connect(config.mongodb.connectionString, {
      dbName: config.mongodb.database,
    })
    .then(() => {
      console.log("Mongo db connected");
    });

  const server = createServer();
  const { url } = await startStandaloneServer(server, {
    listen: { port: +config.app.port },
    context: async () => {
      return {};
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
