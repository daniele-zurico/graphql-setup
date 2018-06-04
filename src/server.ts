import { ApolloServer, AuthenticationError } from "apollo-server";
import express from "express";
import mongoose from "mongoose";
import resolvers from "./resolvers/resolvers";
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";
import schemas from "./schemas/schema";
import { userController } from "./controllers/controllers";
const {OAuth2Client} = require('google-auth-library');

const MONGO_PORT = 27017;
const MONGO_URL = "localhost";
const dbName = "graphExample";
const CLIENT_ID = "580194604079-dpddj213jsbl14rq47s4j7773n6tceo0.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);
// help to debug mongoose
mongoose.set("debug", true);

mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${dbName}`);

const app = express();

const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

// GraphQL
const server = new ApolloServer({
	schema,
	context: async (req: any) => {
		// try to retrieve a user with the token
		// const user = await userController.user(token);
		// if (user.length > 0) {
		// 	return { user };
		// }
	},
	tracing: true
});

// async function verify() {
// 	const ticket = await client.verifyIdToken({
// 		idToken: '',
// 		audience: CLIENT_ID,
// 	});
// 	const payload = ticket.getPayload();
// 	const userid = payload['sub'];
// 	// If request specified a G Suite domain:
// 	//const domain = payload['hd'];
//   }
//   verify().catch(console.error);

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
