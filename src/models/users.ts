import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    surname: String
});

const User = mongoose.model('users', UserSchema);
export {User};