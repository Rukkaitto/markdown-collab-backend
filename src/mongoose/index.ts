import mongoose from "mongoose";

mongoose.connect('mongodb://root:password@localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});
export const db = mongoose.connection;