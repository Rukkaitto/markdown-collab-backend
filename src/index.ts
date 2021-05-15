import express from "express";
import { db } from "./mongoose";
import documentRoutes from "./routes/documentRoutes";

const PORT = 3000;

db.once("open", () => {
    const app = express();
    app.use(express.json());
    app.use("/api/documents", documentRoutes);

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
});