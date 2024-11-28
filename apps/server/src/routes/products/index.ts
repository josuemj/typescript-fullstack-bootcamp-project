import express, { Express } from "express";
import { ProductsService } from "../../services/ProductsService";
import { ProductController } from "../../controllers/productController";

export function productsRoute(app: Express): void {
  const router = express.Router();

  const productController = new ProductController()
  const productsService = new ProductsService()

  app.use('/api/products', router);
  router.get('/', productController.getAllProducts);
  router.get('/:id', productController.getProductById);
  router.get('/collection/:collectionid', productController.getAllProductsByCollection)



  router.post('/', productController.createProduct);
  router.put('/:id', productController.updateProduct); 
  router.delete('/:id', productController.deleteProduct); 
  
}