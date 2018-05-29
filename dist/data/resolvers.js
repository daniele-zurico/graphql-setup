"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./models/users");
const resolvers = {
    Query: {
        allUsers() {
            return users_1.User.find({});
        }
    },
    Mutation: {
        addUser(root, args) {
            let user = new users_1.User({ name: args.name, surname: args.surname });
            return user.save();
        },
        deleteUser(root, args) {
            return users_1.User.deleteOne({ _id: args.id });
        },
        updateUser(root, args) {
            let _tempUser = Object.assign({}, args);
            delete _tempUser.id;
            return users_1.User.updateOne({ _id: args.id }, { $set: _tempUser });
        }
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map