import { ApolloServer, AuthenticationError } from "apollo-server";
import express from "express";
import mongoose from "mongoose";
import resolvers from "./resolvers/resolvers";
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";
import schemas from "./schemas/schema";
import { userController } from "./controllers/controllers";

const MONGO_PORT = 27017;
const MONGO_URL = "localhost";
const dbName = "graphExample";

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
		// mock token
		const token = "1234";

		// try to retrieve a user with the token
		const user = await userController.user(token);
		if (user.length > 0) {
			return { user };
		}
	}
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
