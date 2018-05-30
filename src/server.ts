import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { User } from './data/models/users';
import schema from './data/schema';


const GRAPHQL_PORT = 3000;
const MONGO_PORT = 27017;
const MONGO_URL = 'localhost';
const dbName = 'graphExample';

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${dbName}`, {
    useMongoClient: true
});

const graphQLServer = express();

// GraphQL
graphQLServer.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

// Rest api instead
graphQLServer.get('/users', (req: any, res: any, next: any) => {
    User.find({}).exec((userErr: any, userRes: any) => res.json(userRes));
});

graphQLServer.listen(GRAPHQL_PORT, () =>
    console.log(
        `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
    )
);
