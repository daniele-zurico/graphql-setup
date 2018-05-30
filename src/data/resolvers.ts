import { User } from './models/users';

const resolvers = {
    Mutation: {
        addUser(root: any, args: any) {
            const user = new User({name: args.name, surname: args.surname});
            return user.save();
        },
        deleteUser(root: any, args: any) {
            return User.deleteOne({_id: args.id});
        },
        updateUser(root: any, args: any) {
            const tempUser = {...args};
            delete tempUser.id;
            return User.updateOne({_id: args.id}, {$set: tempUser});
        }
    },
    Query: {
        allUsers() {
            return User.find({});
        }
    }
};

export default resolvers;