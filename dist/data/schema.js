"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = __importDefault(require("./resolvers"));
const typeDefs = `
    type Query {
      allUsers: [User]
    }
    type Mutation {
      # A mutation to add a new channel to the list of channels
      addUser(name: String!, surname: String!): User,
      deleteUser(id: String!): User,
      updateUser(id: String!, name: String, surname: String): User
    }
    type User {
        _id: String,
        name: String,
        surname: String
    }
`;
const schema = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers: resolvers_1.default });
exports.default = schema;
//# sourceMappingURL=schema.js.map