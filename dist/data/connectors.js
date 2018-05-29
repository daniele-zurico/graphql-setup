"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// at the top with imports:
const mongoose_1 = __importDefault(require("mongoose"));
// somewhere in the middle:
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost:27017/graphExample', {
    useMongoClient: true
});
//# sourceMappingURL=connectors.js.map