import { Request, Response } from "express";

export default interface Controller {
    index: (req: Request, res: Response) => Promise<void>
    show: (req: Request, res: Response) => Promise<void>
    store: (req: Request, res: Response) => Promise<void>
    update: (req: Request, res: Response) => Promise<void>
    destroy: (req: Request, res: Response) => Promise<void>
}