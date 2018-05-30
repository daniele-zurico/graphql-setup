import { User } from '../models/users';

const userController = {
  addUser: (root: any, args: any) => {
    const user = new User({name: args.name, surname: args.surname});
    return user.save();
  },
  deleteUser: (root: any, args: any) => User.deleteOne({_id: args.id}),
  updateUser: (root: any, args: any) => {
    const tempUser = {...args};
    delete tempUser.id;
    return User.updateOne({_id: args.id}, {$set: tempUser});
  },
  users: () => User.find({}),


};

export {userController};
