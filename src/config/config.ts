import dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    host: process.env.APP_HOST || "127.0.0.1",
    port: process.env.APP_PORT || 4000,
    baseUrl: process.env.APP_BASE_URL || "http://localhost:4000",
  },
  mongodb: {
    connectionString:
      process.env.MONGODB_CONNECTION_STRING ||
      "mongodb://mongo:mongo@localhost:27017",
    database: process.env.MONGODB_DATABASE || "fsgql",
  },
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
  },
};

export default config;
