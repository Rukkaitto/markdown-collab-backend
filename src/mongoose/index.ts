import mongoose from "mongoose";

mongoose
    .connect('mongodb://root:password@mongo:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB."))
    .catch((err) => console.error(err));
export const db = mongoose.connection;