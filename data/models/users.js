let mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    surname: String
});

const User = mongoose.model('users', UserSchema);
export {User};