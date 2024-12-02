import { Request, Response } from "express";
import { CollectionsService } from "../services/CollectionsSerive";

const collectionsService = new CollectionsService();

export class CollectionsController {
  async getAllCollections(req: Request, res: Response) {
    const collections = await collectionsService.getAllCollections();
    res.json(collections);
  }

  async getCollectionById(req: Request, res: Response) {
    const { id } = req.params;
    const collection = await collectionsService.getCollectionById(Number(id));
    res.json(collection);
  }

  async createCollection(req: Request, res: Response) {
    const data = req.body;
    const collection = await collectionsService.createCollection(data);
    res.status(201).json(collection);
  }

  async updateCollection(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const updatedCollection = await collectionsService.updateCollection(
      Number(id),
      data
    );
    res.json(updatedCollection);
  }

  async deleteCollection(req: Request, res: Response) {
    const { id } = req.params;
    await collectionsService.deleteCollection(Number(id));
    res.status(204).end();
  }
}
