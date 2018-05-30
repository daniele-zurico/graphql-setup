import { ApolloServer } from 'apollo-server';
import express from 'express';
import mongoose from 'mongoose';
import resolvers from './resolvers/resolvers';
import typeDefs from './schemas/schema';

const MONGO_PORT = 27017;
const MONGO_URL = 'localhost';
const dbName = 'graphExample';
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${dbName}`, {
    useMongoClient: true
});

const app = express();

// GraphQL
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
