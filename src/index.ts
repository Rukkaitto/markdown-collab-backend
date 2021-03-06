import express from "express";
import http from "https";
import cors from "cors";
import { db } from "./mongoose";
import documentRoutes from "./routes/documentRoutes";
import { Document } from "./models/document";
import { readFileSync } from "fs";
import path from "path";

const PORT = 8080;
const app = express();
const server = http.createServer({
    cert: readFileSync(path.join(__dirname, "../ssl/cert.pem"), 'utf-8'),
    key: readFileSync(path.join(__dirname, "../ssl/privkey.pem"), 'utf-8'),
}, app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
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

            io.emit(id, {content});
            await document.save((err: any) => {
                if (err) return Error("Could not update document.");
            });
        });
    })

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
});