import { Request, Response } from "express";
import { Document } from "../models/document";
import Controller from "../interfaces/Controller";

const DocumentController: Controller = {
    index : async (req: Request, res: Response) => {
        const documents = await Document.find();
        res.send(documents);
    },
    show: async (req: Request, res: Response) => {
        const { id } = req.params;
        const document = await Document.findById(id);
        res.send(document);
    },
    store: async (req: Request, res: Response) => {
        const { title, content } = req.body;
        const document = new Document({
            title, content,
        })
        document.save((err: any) => {
            if (err) return Error("Could not store document.");
            res.send(document);
        });
    },
    update: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, content } = req.body;

        const document = await Document.findById(id);

        document.title = title;
        document.content = content;

        document.save((err: any) => {
            if (err) return Error("Could not update document.");
            res.send(document);
        });
    },
    destroy: async (req: Request, res:Response) => {
        const { id } = req.params;

        await Document.findByIdAndDelete(id);
        res.status(200).send();
    }
}

export default DocumentController;