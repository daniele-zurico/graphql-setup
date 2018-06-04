import { userController } from "../controllers/controllers";
import { AuthenticationError } from "apollo-server";

const userResolver = {
	Mutation: {
		login(root: any, args: any) {
			return userController.login(root, args.user);
		}
	},
	Query: {
		users(root: any, args: any, context: any) {
			// if (!context.user) throw new AuthenticationError("you must be logged in");
			return userController.users(root, args.user);
		}
	}
};

export default userResolver;
