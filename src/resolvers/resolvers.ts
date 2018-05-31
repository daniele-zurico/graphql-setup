import helloResolver from "./hello.resolver";
import userResolver from "./users.resolver";

const resolvers = {
	Mutation: {
		...userResolver.Mutation
	},
	Query: {
		...userResolver.Query,
		...helloResolver.Query
	}
};

export default resolvers;
