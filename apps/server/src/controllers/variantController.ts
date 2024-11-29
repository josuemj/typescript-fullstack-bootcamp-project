import { Request, Response } from 'express';
import { VariantService } from '../services/VariantsService';

const variantService = new VariantService();

export class VariantController {
  async getAllVariants(req: Request, res: Response) {
    try {
      const variants = await variantService.getAllVariants();
      res.json(variants);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch variants.' });
    }
  }

  async getVariantsByParentProduct(req: Request, res: Response) {
    try {
      const { parentProductId } = req.params;
      const variants = await variantService.getVariantsByParentProduct(
        Number(parentProductId)
      );
      res.json(variants);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch variants for parent product.' });
    }
  }

  async getVariantById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const variant = await variantService.getVariantById(Number(id));
      if (!variant) {
        return res.status(404).json({ error: 'Variant not found.' });
      }
      res.json(variant);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch variant.' });
    }
  }

  async createVariant(req: Request, res: Response) {
    try {
      const data = req.body;
      const variant = await variantService.createVariant(data);
      res.status(201).json(variant);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create variant.' });
    }
  }

  async updateVariant(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const variant = await variantService.updateVariant(Number(id), data);
      res.json(variant);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update variant.' });
    }
  }

  async deleteVariant(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await variantService.deleteVariant(Number(id));
      res.status(204).end();
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete variant.' });
    }
  }
}
