import { Schema, model } from "mongoose";

const documentSchema = new Schema({
    content: String
});

export const Document = model("Document", documentSchema);