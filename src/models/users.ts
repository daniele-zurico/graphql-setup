import mongoose, { Types } from "mongoose";

const UserSchema = new mongoose.Schema({
	_id: String,
	name: String,
	surname: String
});

const User = mongoose.model("users", UserSchema);
export { User };
