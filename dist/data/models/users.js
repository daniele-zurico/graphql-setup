"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: String,
    surname: String
});
const User = mongoose_1.default.model('users', UserSchema);
exports.User = User;
//# sourceMappingURL=users.js.map