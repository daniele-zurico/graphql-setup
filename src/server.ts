import { ApolloServer } from 'apollo-server';
import { registerServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { User } from './models/users';
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
registerServer({ server, app });
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});

// Rest api instead
app.get('/users', (req: any, res: any, next: any) => {
    User.find({}).exec((userErr: any, userRes: any) => res.json(userRes));
});