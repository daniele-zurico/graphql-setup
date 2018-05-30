import { userController } from '../controllers/controllers';

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
    allUsers() {
      return userController.users();
    }
  }
};

export default userResolver;