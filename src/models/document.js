"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var mongoose_1 = require("mongoose");
var documentSchema = new mongoose_1.Schema({
    title: String,
    content: String,
});
exports.Document = mongoose_1.model("Document", documentSchema);
