import express, { Request, Response } from "express";
import documentController from "../controllers/documentController";

const router = express.Router();

router.get('/documents', async (req: Request, res: Response) => {
    documentController.getAll(req, res);
});

export default router;