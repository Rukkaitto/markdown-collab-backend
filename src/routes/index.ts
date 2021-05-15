import express, { Request, Response } from "express";
import documentController from "../controllers/documentController";

const router = express.Router();

router.get('/documents', async (req: Request, res: Response) => {
    await documentController.index(req, res);
});

router.get('/documents/:id', async (req: Request, res: Response) => {
    await documentController.show(req, res);
});

router.post('/documents', async (req: Request, res: Response) => {
    await documentController.store(req, res);
});

router.put('/documents/:id', async (req: Request, res: Response) => {
    await documentController.update(req, res);
});

router.delete('/documents/:id', async (req: Request, res: Response) => {
    await documentController.destroy(req, res);
});

export default router;