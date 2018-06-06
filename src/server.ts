import { ApolloServer, AuthenticationError } from "apollo-server";
import express from "express";
import mongoose from "mongoose";
import resolvers from "./resolvers/resolvers";
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";
import schemas from "./schemas/schema";
import { userController } from "./controllers/controllers";
const { OAuth2Client } = require("google-auth-library");

const MONGO_PORT = 27017;
const MONGO_URL = "localhost";
const dbName = "graphExample";
export const CLIENT_ID = "YOU_CLIENT_ID";
export const client = new OAuth2Client(CLIENT_ID);
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
	context: async ({ req }: any) => {
		const token = req.headers.authorization || "";
		console.log("token is:", token);
		const checkToken = await userController.verifyGoogleToken(token);
		console.log(checkToken);
		// try to retrieve a user with the token
		// const user = await userController.user(token);
		// if (user.length > 0) {
		// 	return { user };
		// }
	},
	tracing: true
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
