import express, { Express } from "express";
import { CollectionsController } from "../../controllers/collectionController";


export function collectionsRoute(app: Express): void {
  const router = express.Router();
  const collectionsController = new CollectionsController();

  app.use("/api/collections", router);

  router.get("/", collectionsController.getAllCollections);
  router.get("/:id", collectionsController.getCollectionById);
  router.post("/", collectionsController.createCollection);
  router.put("/:id", collectionsController.updateCollection);
  router.delete("/:id", collectionsController.deleteCollection);
}
