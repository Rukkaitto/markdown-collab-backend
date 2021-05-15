import { Request, Response } from "express";
import { Document } from "../models/document";

export default {
    getAll : async (req: Request, res: Response) => {
        const documents = await Document.find();
        res.send(documents);
    },
};