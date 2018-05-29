import {User} from './models/users';

const resolvers = {
    Query: {
        allUsers() {
          return User.find({});
        }
    },
    Mutation: {
        addUser(root: any, args: any) {
            let user = new User({name: args.name, surname: args.surname});
            return user.save();
        },
        deleteUser(root: any, args: any) {
            return User.deleteOne({_id: args.id});
        },
        updateUser(root: any, args: any) {
            let _tempUser = Object.assign({}, args);
            delete _tempUser.id;
            return User.updateOne({_id: args.id},{$set: _tempUser});
        }
    }

};

export default resolvers;