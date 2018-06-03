import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const userSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			allUsers: [User]
		}
		type Mutation {
			addUser(name: String!, surname: String!): User
			deleteUser(id: String!): User
			updateUser(id: String!, name: String, surname: String): User
		}
		type User {
			_id: String
			name: String
			surname: String
		}

	`
});
addMockFunctionsToSchema({ schema: userSchema });

export default userSchema;
