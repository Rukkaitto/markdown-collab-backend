import express from "express";
import { db } from "./mongoose";
import routes from "./routes";

const PORT = 3000;

db.once("open", () => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
});