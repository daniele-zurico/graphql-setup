import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const userSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			users: [User]
		}
		type Mutation {
			login(user: USER_PAYLOAD): User
		}
		type User {
			_id: String
			displayName: String
			id: String
			idToken: String
			profilePicture: String
		}
		input USER_PAYLOAD {
			authDomain: String
			authMethod:String
			displayName:String
			id:String
			idToken:String
			profilePicture:String
		  }

	`
});
addMockFunctionsToSchema({ schema: userSchema });

export default userSchema;
