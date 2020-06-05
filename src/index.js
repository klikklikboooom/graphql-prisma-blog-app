import "@babel/polyfill/noConflict";
import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./db";
import prisma from "./prisma";
import { resolvers, fragmentReplacements } from "./resolvers/index";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context(request) {
    return {
      db,
      pubsub,
      prisma,
      request,
    };
  },
  fragmentReplacements,
});

server.start({ port: process.env.PORT || 4000 }, () => {
  console.log("Server is running");
});
