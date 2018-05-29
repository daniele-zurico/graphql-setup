import {User} from './models/users';

const resolvers = {
    Query: {
        allUsers() {
          return User.find({});
        }
    },
    Mutation: {
        addUser(root, args) {
            let user = new User();
            user.name = args.name;
            user.surname = args.surname;
            return user.save();
        },
        deleteUser(root, args) {
            return User.deleteOne({_id: args.id});
        },
        updateUser(root, args) {
            let _tempUser = Object.assign({}, args);
            delete _tempUser.id;
            return User.updateOne({_id: args.id},{$set: _tempUser});
        }
    }

};

export default resolvers;