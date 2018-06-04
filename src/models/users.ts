import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	displayName: String,
	id: String,
	idToken: String,
	profilePicture: String

});

const User = mongoose.model("users", UserSchema);
export { User };
