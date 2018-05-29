import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
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

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
