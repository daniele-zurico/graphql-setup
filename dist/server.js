"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const users_1 = require("./data/models/users");
const body_parser_1 = __importDefault(require("body-parser"));
const schema_1 = __importDefault(require("./data/schema"));
const mongoose_1 = __importDefault(require("mongoose"));
const GRAPHQL_PORT = 3000;
const MONGO_PORT = 27017;
const MONGO_URL = 'localhost';
const dbName = 'graphExample';
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${dbName}`, {
    useMongoClient: true
});
const graphQLServer = express_1.default();
// GraphQL
graphQLServer.use('/graphql', body_parser_1.default.json(), apollo_server_express_1.graphqlExpress({ schema: schema_1.default }));
graphQLServer.use('/graphiql', apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }));
// Rest api instead
graphQLServer.get('/users', (req, res, next) => {
    users_1.User.find({}).exec((_err, _res) => res.json(_res));
});
graphQLServer.listen(GRAPHQL_PORT, () => console.log(`GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`));
//# sourceMappingURL=server.js.map