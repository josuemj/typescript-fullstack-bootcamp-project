import express, { Express } from 'express';
import { VariantController } from '../../controllers/variantController';
export function variantRoutes(app: Express): void {
  const router = express.Router();
  const variantController = new VariantController();

  app.use('/api/variants', router);

  router.get('/', variantController.getAllVariants); // Get all variants
  router.get('/:id', variantController.getVariantById); // Get variant by ID
  router.get('/product/:parentProductId', variantController.getVariantsByParentProduct); // Get variants by parent product ID
  router.post('/', variantController.createVariant); // Create a new variant
  router.put('/:id', variantController.updateVariant); // Update variant
  router.delete('/:id', variantController.deleteVariant); // Delete variant
}