import express from "express";
import http from "http";
import cors from "cors";
import { db } from "./mongoose";
import documentRoutes from "./routes/documentRoutes";
import DocumentController from "./controllers/documentController";
import { Document } from "./models/document";

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

db.once("open", () => {
    app.use(cors());
    app.use(express.json());
    app.use("/api/documents", documentRoutes);

    io.on('connection', (socket:any) => {
        socket.on("contentChange", async ({id, content}: {id: string, content: string}) => {
            const document = await Document.findById(id);

            document.content = content;

            io.emit("contentUpdate", {id, content});
            await document.save((err: any) => {
                if (err) return Error("Could not update document.");
            });
        });
    })

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
});