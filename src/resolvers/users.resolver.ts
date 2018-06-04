import { userController } from "../controllers/controllers";
import { AuthenticationError } from "apollo-server";

const userResolver = {
	Mutation: {
		addUser(root: any, args: any) {
			return userController.addUser(root, args);
		},
		deleteUser(root: any, args: any) {
			return userController.deleteUser(root, args);
		},
		updateUser(root: any, args: any) {
			return userController.updateUser(root, args);
		}
	},
	Query: {
		allUsers(root: any, args: any, context: any) {
			console.log("Context:", context);
			if (!context.user) throw new AuthenticationError("you must be logged in");
			return userController.users(root, args);
		}
	}
};

export default userResolver;
