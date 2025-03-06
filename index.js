import { ApolloServer } from "apollo-server-express";
import { gql } from "graphql-tag";
import { startStandaloneServer } from "@apollo/server/standalone"
import { buildSchema } from "graphql"
import express from "express"
import typeDefs from "./graphql/typeDefs/index.js"
import { expressMiddleware } from "@apollo/server/express4";

const userRoutes = require('./routes/users/userRoutes.js')


const app = express();

 
const server = new ApolloServer({
  typeDefs,
  // resolvers,
})


app.use('/api', userRoutes)


async function startServer() {
  await server.start();
  app.use("graphql", expressMiddleware(server))

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((err) => console.error("Error starting server:", err));