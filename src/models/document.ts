import { Schema, model } from "mongoose";

const documentSchema = new Schema({
    title: String,
    content: String,
});

export const Document = model("Document", documentSchema);