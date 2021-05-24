"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect('mongodb://root:password@mongo:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () { return console.log("Connected to MongoDB."); })
    .catch(function (err) { return console.error(err); });
exports.db = mongoose_1.default.connection;
