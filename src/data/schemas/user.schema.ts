import { gql } from 'apollo-server';

const userDefs = gql`
    type Query {
      allUsers: [User],
      hello: String
    }
    type Mutation {
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

export default userDefs;