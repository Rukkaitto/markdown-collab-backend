import express, { Request, Response } from "express";
import documentController from "../controllers/documentController";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    await documentController.index(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
    await documentController.show(req, res);
});

router.post('/', async (req: Request, res: Response) => {
    await documentController.store(req, res);
});

router.put('/:id', async (req: Request, res: Response) => {
    await documentController.update(req, res);
});

router.delete('/:id', async (req: Request, res: Response) => {
    await documentController.destroy(req, res);
});

export default router;