import { ApolloServer } from "apollo-server-express";
import { gql } from "graphql-tag";
import { startStandaloneServer } from "@apollo/server/standalone"
import { buildSchema } from "graphql"
import express from "express"
import typeDefs from "./graphql/typeDefs/index.js"
import { expressMiddleware } from "@apollo/server/express4";

import userRoutes from './routes/users/userRoutes.js'

import mongoose from "mongoose";


const app = express();
app.use(express.json());
 
const server = new ApolloServer({
  typeDefs,
  // resolvers,
})

async function connectDB() {
  try {
    const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://rjsarellano:5Da7lgkooc123$@rpt.bnqpxht.mongodb.net/test?retryWrites=true&w=majority&appName=hpdb";
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); 
  }
}

async function startServer() {
  await server.start();
await connectDB()
  app.use("/graphql", expressMiddleware(server))
  app.use('/api/users', userRoutes)
  
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((err) => console.error("Error starting server:", err));